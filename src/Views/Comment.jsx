import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import { Z_STREAM_ERROR } from "zlib";
import { SendComment } from "./utils.js"
import { useImmerReducer } from 'use-immer';
import { storeComment } from './utils';


function commentReducer(draft, action) {
    switch (action.type) {
      case 'field': {
        draft[action.fieldName] = action.payload;
        return;
      }
      case 'comment': {
        draft.error = '';
        draft.isSending = true;
        return;
      }
      case 'success': {
        draft.isSent = true;
        draft.isSending = false;
        return;
      }
      case 'error': {
        draft.error = 'Submission Errror';
        draft.isSent = false;
        draft.isSending = false;
        return;
      }
      default:
        return;
    }
  }
function Comment(props){
    const [state, dispatch] = useImmerReducer(commentReducer, initialState);
    const { username, isSending, error, isSent } = state;

    const onCommentSubmit = async (e) => {
        e.preventDefault();
    
        dispatch({ type: 'comment' });
    
        try {
          await storeComment({ username, comment }); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
          dispatch({ type: 'success' });
        } catch (error) {
          dispatch({ type: 'error' });
        }
      };

 return (

      <div>
          <form method="POST" action="#" onSubmit={onCommentSubmit}>
          <input
                  type='hidden'
                  placeholder='username'
                  value={username}
            />
          <input
                  type='text'
                  placeholder='comment'
                  value={comment}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'comment',
                      payload: e.currentTarget.value,
                    })
                  }
            />
            <button className='submit' type='submit' disabled={isSending}>
                  Submit a comment  
            </button>
          </form>
      </div>
 );
}