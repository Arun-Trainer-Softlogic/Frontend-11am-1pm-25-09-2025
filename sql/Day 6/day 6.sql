-- use company_ds;

-- select * from employees;
-- INSERT INTO employees (first_name,last_name,email,phone,emp_code,hire_date,last_login,notes,dept_id,salary,active)
--  VALUES 
--  ('haaaaa','eaaal','  ASHA.PATEL@example.com ','+91-80-1234-5678','E1', '2022-03-01','2024-11-20 09:12:30',' new hire ',null,70000,1)


-- insert into departments (dept_id, name, location )
-- values (7, 'housekeeping',' maiyladthurai');


-- select
-- e.emp_id,
-- concat(e.first_name, ' ', e.last_name) As full_name,
-- d.name as department
-- from employees e 
-- inner join departments d
-- on e.dept_id = d.dept_id ; -- only matchig row 




-- select e.emp_id ,
-- concat(e.first_name , " " , e.last_name)As full_name ,
-- d.name as departments
-- from employees e 
-- left join departments d 
-- on e.dept_id = d.dept_id 


-- full join 






-- (
--     select e.emp_id, e.first_name ,d.name as departments
--     from employees
--     left join departments d on e.dept_id = d.dept_id
-- )

-- union
-- (
--     select e.emp_id, e.first_name, d.name
--     from employees e
--     right join departments d on e.dept_id = d.dept_id
-- )



-- SELECT column_name(s)
-- from table t1, table t2
-- where condition 



SELECT
    e1.emp_id AS emp_id_1,
    CONCAT(e1.first_name, ' ', e1.last_name) AS employee_1,
    YEAR(e1.hire_date) AS hire_year,
    e2.emp_id AS emp_id_2,
    CONCAT(e2.first_name, ' ', e2.last_name) AS employee_2
FROM employees e1
  join employees e2
    ON YEAR(e1.hire_date) = YEAR(e2.hire_date) 
 AND e1.emp_id <> e2.emp_id                    
ORDER BY hire_year, employee_1;





















