DROP DATABASE IF EXISTS portfolio_manager;

CREATE DATABASE portfolio_manager;
\c portfolio_manager;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(25) NOT NULL UNIQUE,
  portfolio_summary_id SMALLINT,
  portfolio_ids JSON,
  portfolio_exchange_ids JSON,
  PRIMARY KEY (id)
);

CREATE INDEX user_ids ON users USING HASH (id);
CREATE INDEX username ON users USING HASH (username);

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

CREATE INDEX portfolio_ids ON portfolios USING HASH (id);

CREATE TABLE portfolio_data (
  id SERIAL,
  portfolio_id SMALLINT NOT NULL,
  date DATE NOT NULL,
  balance MONEY NOT NULL,
  deposit MONEY NOT NULL,
  withdrawal MONEY NOT NULL,
  returns MONEY NOT NULL,
  cumulative_returns MONEY NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (portfolio_id) REFERENCES portfolios (id)
);

CREATE INDEX portfolio_data_ids ON portfolio_data (portfolio_id);


-- ALTER TABLE users ADD FOREIGN KEY (portfolio_summary_id) REFERENCES portfolios (id);

INSERT INTO users (username, portfolio_summary_id, portfolio_ids, portfolio_exchange_ids)
VALUES ('eddielo', 1, '[2, 3]', '[1, 1]');

INSERT INTO portfolios (name, user_id)
VALUES ('Summary', 1);

INSERT INTO exchanges (company)
VALUES ('Vanguard');

INSERT INTO portfolios (name, user_id, exchange_id)
VALUES ('Vanguard (4-Fund)', 1, 1);

INSERT INTO portfolios (name, user_id, exchange_id)
VALUES ('Vanguard (Retirement)', 1, 1);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-7', 1, 1000, 1000, 0, 0, 0);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-7', 2, 1000, 1000, 0, 0, 0);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-14', 1, 2205, 100, 0, 5, 105);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-14', 2, 2100, 1000, 0, 100, 100);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-14', 3, 105, 100, 0, 5, 5);

INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-15', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-16', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-17', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-18', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-19', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-20', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-21', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-22', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-23', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-24', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-25', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-26', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-27', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-28', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-29', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-30', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-10-31', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-1', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-2', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-3', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-4', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-5', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-6', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-7', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-8', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-9', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-10', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-11', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-12', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-13', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-14', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-15', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-16', 1, 2205, 100, 0, 5, 105);
INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
VALUES ('2018-11-17', 1, 2205, 100, 0, 5, 105);
