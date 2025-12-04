-- create or replace view vw_employees_summary as 
-- select 
-- e.emp_id, 
-- concat(trim(e.first_name), " ", trim(e.last_name))as full_name ,
-- d.name as departments,
-- year(e.hire_date)As hire_year,
-- timestampdiff(year , e.hire_date,  now())as tenure_days
-- from employees e 
-- left join departments d on e.dept_id = d.dept_id;



-- create or replace  view  vw_salary_report  as 
-- select 
-- d.dept_id,
-- d.name as department,
-- avg(e.salary) as avg_salary,
-- sum(e.salary)as totalsalary
-- from departments d
-- left join employees e on d.dept_id = e.dept_id
-- group by d.dept_id, d.name;


DELIMITER $$

create 

end $$

DELIMITER ;














 