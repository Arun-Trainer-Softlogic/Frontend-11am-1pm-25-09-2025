-- create database databasename;

-- use databasename;

-- create table demo_types (
-- id int auto_increment primary key,
-- full_name varchar(100),
-- age int,
-- salary decimal(10,2),
-- hire_date date,
-- login_time datetime,
-- active boolean
-- );

-- insert into  demo_types (full_name , age , salary, hire_date , login_time, active)
-- values ("arun", 18 , 72000.50, '2022-03-01', now(), 1 );




-- insert into  demo_types (full_name , age , salary, hire_date , login_time, active)
-- values ("sdfgjk ", 60 , 72000.50, '2025-05-01', now(), false );

-- select * from demo_types ;






-- create table text_demo(
-- short_text varchar(50),
-- long_text text
-- );


-- insert into text_demo values (
-- "hello World", 'asdfgjk dfghjk sdfgjkl asdgjk wetyui wertyui sdgjk dsfgj frg dtyu' 
-- )



-- select * from text_demo;




-- insert into  demo_types (full_name , age , salary, hire_date , login_time, active)
-- values ("rahul", 33, 82000, '2021-07-15' , '2023-05-01 14:30:00', 1)

-- select hire_date , login_time from demo_types ;



-- insert into  demo_types (full_name , age , salary, hire_date , login_time, active)
-- values(
-- 'sima roy' , 29, 50000, '2020-11-01',now(), 0
-- );


-- select full_name , active from demo_types ;


-- insert into  demo_types (full_name , age , salary, hire_date , login_time, active)
-- values(
-- "danush", 29, 30000, '2020-11-01', now(), 1
-- );

-- select id , full_name from demo_types ;




--  insert into demo_types (age , salary)
--  values ('eer33', '2')


-- update demo_types set salary = 7000 where id = 1;



-- delete from demo_types where id = 1

select * from demo_types where salary > 60000;


-- select *  from demo_types order by id desc;



-- select * from demo_types limit 3 ;]


-- select * from demo_types where id between 5 and 7 


