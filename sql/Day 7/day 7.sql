-- create database school;

-- use school;
-- DROP TABLE IF EXISTS Enrollments;
-- DROP TABLE IF EXISTS CourseOfferings;
-- DROP TABLE IF EXISTS Courses;
-- DROP TABLE IF EXISTS Instructors;
-- DROP TABLE IF EXISTS Departments;
-- DROP TABLE IF EXISTS Students;
-- DROP TABLE IF EXISTS Employees;
-- DROP TABLE IF EXISTS student_course_denorm;


-- CREATE TABLE student_course_denorm (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   student_name VARCHAR(100),
--   courses_list VARCHAR(255)  -- comma-separated list of courses (bad practice)
-- );



-- INSERT INTO student_course_denorm (student_name, courses_list) VALUES
-- ('Alice Johnson', 'CS101,MA101'),
-- ('Bob Patel', 'CS101'),
-- ('Cara Singh', 'EN101,CS101,MA101');


-- SELECT * FROM student_course_denorm;



-- CREATE TABLE Departments (
--   dept_id INT PRIMARY KEY,
--   dept_name VARCHAR(100) NOT NULL UNIQUE
-- );

-- -- Instructors belong to departments
-- CREATE TABLE Instructors (
--   instructor_id INT PRIMARY KEY,
--   first_name VARCHAR(50),
--   last_name VARCHAR(50),
--   dept_id INT,
--   email VARCHAR(100),
--   FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
-- );



-- CREATE TABLE Courses (
--   course_id INT PRIMARY KEY,
--   course_code VARCHAR(10) NOT NULL UNIQUE,
--   title VARCHAR(150) NOT NULL,
--   dept_id INT,
--   credits INT,
--   FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
-- );


-- CREATE TABLE CourseOfferings (
--   offering_id INT PRIMARY KEY,
--   course_id INT NOT NULL,
--   term VARCHAR(20) NOT NULL,        -- e.g., 'Fall 2025'
--   instructor_id INT,
--   capacity INT DEFAULT 30,
--   FOREIGN KEY (course_id) REFERENCES Courses(course_id),
--   FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
-- );



-- CREATE TABLE Students (
--   student_id INT PRIMARY KEY,
--   first_name VARCHAR(50),
--   last_name VARCHAR(50),
--   email VARCHAR(100) UNIQUE,
--   dob DATE
-- );


-- CREATE TABLE Enrollments (
--   student_id INT,
--   offering_id INT,
--   enrolled_on DATE,
--   grade CHAR(2),  -- e.g., 'A', 'B+', NULL if in progress
--   PRIMARY KEY (student_id, offering_id),
--   FOREIGN KEY (student_id) REFERENCES Students(student_id),
--   FOREIGN KEY (offering_id) REFERENCES CourseOfferings(offering_id)
-- );




-- CREATE TABLE Employees (
--   emp_id INT PRIMARY KEY,
--   name VARCHAR(100),
--   title VARCHAR(100),
--   manager_id INT NULL,
--   dept_id INT,
--   FOREIGN KEY (manager_id) REFERENCES Employees(emp_id),
--   FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
-- );



-- =================================================
-- 2) Insert sample normalized data (enough cases for all join types)
-- =================================================
-- Departments
-- INSERT INTO Departments (dept_id, dept_name) VALUES
-- (1, 'Computer Science'),
-- (2, 'Mathematics'),
-- (3, 'English');

-- -- Instructors
-- INSERT INTO Instructors (instructor_id, first_name, last_name, dept_id, email) VALUES
-- (10, 'Dr. Alan', 'Turing', 1, 'alan.turing@uni.edu'),
-- (11, 'Dr. Grace', 'Hopper', 1, 'grace.hopper@uni.edu'),
-- (12, 'Dr. Emmy', 'Noether', 2, 'emmy.noether@uni.edu'),
-- (13, 'Prof. Maya', 'Angelou', 3, 'maya.angelou@uni.edu');

-- -- Courses
-- INSERT INTO Courses (course_id, course_code, title, dept_id, credits) VALUES
-- (100, 'CS101', 'Intro to Computer Science', 1, 4),
-- (101, 'CS201', 'Data Structures', 1, 4),
-- (200, 'MA101', 'Calculus I', 2, 4),
-- (300, 'EN101', 'English Literature', 3, 3);

-- -- Course Offerings
-- INSERT INTO CourseOfferings (offering_id, course_id, term, instructor_id, capacity) VALUES
-- (1000, 100, 'Fall 2025', 10, 40),   -- CS101 Fall taught by Turing
-- (1001, 100, 'Spring 2025', 11, 35), -- CS101 Spring taught by Hopper
-- (1002, 101, 'Fall 2025', 11, 30),   -- CS201 Fall
-- (2000, 200, 'Fall 2025', 12, 50),   -- MA101 Fall
-- (3000, 300, 'Fall 2025', 13, 25);   -- EN101 Fall

-- -- Students
-- INSERT INTO Students (student_id, first_name, last_name, email, dob) VALUES
-- (1, 'Alice', 'Johnson', 'alice.j@uni.edu', '2003-02-15'),
-- (2, 'Bob', 'Patel', 'bob.p@uni.edu', '2002-07-08'),
-- (3, 'Cara', 'Singh', 'cara.s@uni.edu', '2003-11-30'),
-- (4, 'Dan', 'Lee', 'dan.l@uni.edu', '2004-05-22'),      -- will show LEFT JOIN gap
-- (5, 'Eve', 'Martinez', 'eve.m@uni.edu', '2001-12-01'); -- unused student for FULL join demos

-- -- Enrollments (student -> offering)
-- INSERT INTO Enrollments (student_id, offering_id, enrolled_on, grade) VALUES
-- (1, 1000, '2025-08-25', 'A'),   -- Alice in CS101 Fall
-- (2, 1000, '2025-08-26', 'B+'),  -- Bob in CS101 Fall
-- (3, 1000, '2025-08-27', NULL),  -- Cara in CS101 Fall (in progress)
-- (3, 2000, '2025-08-27', NULL),  -- Cara also in MA101 Fall
-- (1, 3000, '2025-08-25', 'A-'),  -- Alice in EN101 Fall
-- (5, 1001, '2025-01-10', 'B');   -- Eve in CS101 Spring

-- -- Employees for SELF JOIN (manager hierarchies)
-- INSERT INTO Employees (emp_id, name, title, manager_id, dept_id) VALUES
-- (900, 'Principal', 'Head', NULL, 1),
-- (901, 'Department Admin', 'Admin', 900, 1),
-- (902, 'TA Mike', 'Teaching Assistant', 901, 1),
-- (903, 'TA Sara', 'Teaching Assistant', 901, 2),
-- (904, 'Librarian Joe', 'Librarian', NULL, 3);

-- -- =================================================




-- select  * from courseofferings
-- select * from courses


-- inner join 

-- select s.first_name, s.last_name , c.course_code , co.term, e.grade
-- from enrollments e
-- inner join students s on e.student_id = s.student_id
-- inner join courseofferings co on e.offering_id = co.offering_id
-- inner join courses c on co.course_id = c.course_id


-- create database company;
-- use company;

-- CREATE TABLE Departments (
--     dept_id INT PRIMARY KEY,
--     dept_name VARCHAR(50)
-- );

-- CREATE TABLE Employees (
--     emp_id INT PRIMARY KEY,
--     emp_name VARCHAR(50),
--     dept_id INT, 
--     foreign key (dept_id) references departments(dept_id)
--     )


-- CREATE TABLE Projects (
--     project_id INT PRIMARY KEY,
--     project_name VARCHAR(50),
--     emp_id INT,
--     foreign key (emp_id) references employees(emp_id)
--     )


-- INSERT INTO Departments VALUES
-- (1, 'HR'),
-- (2, 'IT'),
-- (3, 'Finance');

-- INSERT INTO Employees VALUES
-- (101, 'Alice', 1),
-- (102, 'Bob', 1),
-- (103, 'Charlie', 2),
-- (104, 'David', NULL);   -- no department assigned

-- INSERT INTO Projects VALUES
-- (1001, 'Website Revamp', 103),   -- Charlie
-- (1002, 'Recruitment Drive', 101),-- Alice
-- (1003, 'Budget Planning', NULL); -- no employee assigned



-- select e.emp_name , d.dept_name 
-- from employees e 
-- inner join departments d 
-- on e.dept_id = d.dept_id 


-- select e.emp_name , d.dept_name 
-- from employees e
-- left join departments d 
-- on e.dept_id = d.dept_id 

-- SELECT e.emp_name, d.dept_name
-- FROM Employees e
-- RIGHT JOIN Departments d
--     ON e.dept_id = d.dept_id
--     where d.dept_name = "finance";


-- select e.emp_name , d.dept_name
-- from employees e 
-- left join departments d on e.dept_id = d.dept_id

-- union 

-- select e.emp_name, d.dept_name 
-- from employees e
-- right join departments d on e.dept_id = d.dept_id



-- SELECT p.project_name, e.emp_name
-- FROM Projects p
-- INNER JOIN Employees e
--     ON p.emp_id = e.emp_id;




--  Departments (1) ──────────< Employees (many) ──────────< Projects (many)
--   dept_id (PK)             emp_id (PK)                   project_id (PK)
--                            dept_id (FK)                  emp_id (FK)


 
 

-- use company_ds;
























