-- esquema SQL fictício
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  holder_name TEXT NOT NULL,
  balance NUMERIC(12,2) DEFAULT 0
);
