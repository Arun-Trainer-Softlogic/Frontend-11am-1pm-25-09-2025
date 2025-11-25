-- -- Normalization is the process of organizing data into multiple related tables to reduce redundancy,
-- -- improve integrity,
-- -- and increase maintainability.It ensures that each fact is stored only once,
-- -- relationships are clear,
-- -- and updates don ’ t break data.

-- -- Why Normalize?

-- -- Prevents duplicate data

-- -- Makes updates safer

-- -- Improves referential integrity

-- -- Makes data scalable in enterprise systems

-- -- Reduces inconsistent data issues (e.g., mismatched emails, names)

-- -- why we do not use Normalization ? 

-- -- Used for:

-- -- Analytics / reporting systems

-- -- High-read environments (OLAP)

-- -- Caching

-- -- Performance optimization



-- -- 1nf
-- definition 
-- A table is in 1NF when:

-- Data is atomic (no multiple values inside one cell)

-- No repeating columns

-- Each record is unique


-- -- 2nf
-- A table is in 2nf when : 


-- It is in 1NF

-- Every non-key attribute depends on the whole primary key, not part of it

-- Applies only when PK is composite


-- -- 3nf
-- Definition:
-- A table is in 3NF when:

-- It is in 2NF

-- No non-key column depends on another non-key column



-- full join (simulation )




