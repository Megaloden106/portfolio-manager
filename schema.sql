CREATE DATABASE portfolio_manager;
\c portfolio_manager;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(25) NOT NULL UNIQUE,
  portfolio_summary JSON,
  PRIMARY KEY (id)
);

CREATE TABLE exchanges (
  id SERIAL,
  exhange VARCHAR(25) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE portfolios (
  id SERIAL,
  user_id SMALLINT,
  exhange_id SMALLINT
  PRIMARY KEY (id)
  FOREIGN KEY (user_id) REFERENCES users (id)
  FOREIGN KEY (exhange_id) REFERENCES exchanges (id)
);

CREATE TABLE portfolio_data (
  id SERIAL,
  portfolio_id SMALLINT,
  date DATE,
  PRIMARY KEY (id),
  FOREIGN KEY (portfolio_id) REFERENCES portfolios (id)
);
