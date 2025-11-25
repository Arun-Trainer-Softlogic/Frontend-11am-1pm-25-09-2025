-- use starlingdb;

-- select * all coloum 
-- specific coloum improve performance 

-- select id , last_name , salary, hire_date from employees;



-- select id, last_name , salary from employees where id = 20;

-- where === filter rows on a condition 


-- filtering operators 
-- between 
-- checks if value is within a range 


-- select id , last_name , salary, hire_date from employees 
-- where salary between 70000 and 80000;


-- in 
-- matches any value from list 

-- select dep_id , last_name , salary, hire_date from employees where 
-- dep_id in (3,5);

-- And
-- both condition must be true 

-- select salary , last_name , active, hire_date from employees 
-- where salary > 60000 and active = 0
-- or 
-- atlest one condition must be true 

-- select id , last_name , salary, hire_date from employees 
-- where dep_id = 1 or dep_id = 2;


-- not
-- neglets a condition 

--  select id , last_name , salary, hire_date, active from employees 
--  where not active = 0
--  

-- select id , last_name , salary, hire_date from employees 
-- where salary = 60000
-- select id , last_name , dep_id, salary, hire_date from employees 
-- where dep_id <> 2;
-- select id , last_name , salary, hire_date from employees 
-- where salary >= 85000;
-- select id , last_name , salary, hire_date from employees 
-- where >=
-- <=

-- having 
-- filters grouped results 
-- used only with group by 


-- select dep_id , count(*) As total_count 
-- from employees 
-- group by dep_id;


-- select sum(first_name), sum(salary) as total_salary
--  from employees
--  group by first_name;

-- select 
-- dep_id ,
-- sum(salary)as total_salary,
-- avg(salary)AS AVG_SALA
-- from employees 
-- group by dep_id;


-- select dep_id , avg(salary)as avg_sala
-- from employees
-- group by dep_id
-- having avg_sala > 70000;




-- SELECT dep_id, avg_sala
-- FROM (
--     SELECT dep_id, AVG(salary) AS avg_sala
--     FROM employees
--     GROUP BY dep_id
-- ) AS department_salaries
-- WHERE avg_sala > 70000;


--  select dep_id , avg(salary)as avg_sala
-- from employees
-- group by dep_id
--  having avg_sala > 70000;

-- select first_name , salary , id
-- from employees 
-- order by salary desc limit 3;


-- select * from employees 
-- limit 5 ;



-- select * from employees 
-- limit 5 offset 3;










 












