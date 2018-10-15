DROP DATABASE IF EXISTS portfolio_manager;

CREATE DATABASE portfolio_manager;
\c portfolio_manager;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(25) NOT NULL UNIQUE,
  portfolio_summary_id SMALLINT,
  portfolio_ids JSON,
  PRIMARY KEY (id)
);

CREATE TABLE exchanges (
  id SERIAL,
  company VARCHAR(25) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE portfolios (
  id SERIAL,
  name VARCHAR(30) NOT NULL,
  user_id SMALLINT NOT NULL,
  exchange_id SMALLINT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (exchange_id) REFERENCES exchanges (id)
);

CREATE TABLE portfolio_data (
  id SERIAL,
  portfolio_id SMALLINT NOT NULL,
  date DATE NOT NULL,
  balance MONEY NOT NULL,
  deposit MONEY NOT NULL,
  withdrawal MONEY NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (portfolio_id) REFERENCES portfolios (id)
);

INSERT INTO users (username, portfolio_summary_id, portfolio_ids)
VALUES ('eddielo', 1, '[2]');

INSERT INTO portfolios (name, user_id)
VALUES ('Summary', 1);

INSERT INTO exchanges (company)
VALUES ('Vanguard');

INSERT INTO portfolios (name, user_id, exchange_id)
VALUES ('Vanguard (4-Fund)', 1, 1);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal)
VALUES ('2018-10-14', 1, 1000, 1000, 0);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal)
VALUES ('2018-10-14', 2, 1000, 1000, 0);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal)
VALUES ('2018-10-14', 1, 2000, 1000, 0);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal)
VALUES ('2018-10-14', 2, 2000, 1000, 0);
