use todd;

drop table if exists Event;
drop table if exists Person;
create table Person(
    ID int auto_increment primary key,
    Name varchar(30),
    Password varchar(30)
);

create table Event(
    ID int auto_increment primary key,
    PersonID int ,
    Value varchar(255),
    foreign key (PersonID) references Person(ID)
);

insert into Person(Name, Password) 
values ('Todd','P@ssword1'), 
       ('Trent','P@ssword2'),
       ('Tamisin','P@ssword3'),
       ('Trisha','P@ssword4');
insert into Event(PersonID, Value)
values (1, 'Todd said this'),
       (2, 'Trent said this');

drop procedure if exists GetUsers;
delimiter //
create procedure GetUsers()
begin
      select * from Person;
end //
delimiter ;

 

