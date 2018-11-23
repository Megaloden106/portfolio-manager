DROP DATABASE IF EXISTS portfolio_manager;

CREATE DATABASE portfolio_manager;
\c portfolio_manager;

CREATE TABLE users (
  id SERIAL,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(25) NOT NULL UNIQUE,
  email VARCHAR(35) NOT NULL UNIQUE,
  verified BOOLEAN,
  password VARCHAR(128) NOT NULL,
  salt VARCHAR(25) NOT NULL,
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
  type VARCHAR(10) NOT NULL,
  category VARCHAR(10) NOT NULL,
  balance MONEY NOT NULL,
  user_id INT NOT NULL,
  exchange_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (exchange_id) REFERENCES exchanges (id)
);

CREATE INDEX portfolio_ids ON portfolios USING HASH (user_id);

CREATE TABLE portfolio_data (
  id SERIAL,
  portfolio_id INT NOT NULL,
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

CREATE TABLE requests (
  id SERIAL,
  type VARCHAR(30) NOT NULL
  detail TEXT NOT NULL
  PRIMARY KEY (id)
)

INSERT INTO exchanges (company) VALUES ('Vanguard');
INSERT INTO exchanges (company) VALUES ('Robinhood');
INSERT INTO exchanges (company) VALUES ('E*Trade');
INSERT INTO exchanges (company) VALUES ('Charles Schwab');
INSERT INTO exchanges (company) VALUES ('TD Ameritrade');
INSERT INTO exchanges (company) VALUES ('T. Rowe Price');
INSERT INTO exchanges (company) VALUES ('Interatice Broker');
INSERT INTO exchanges (company) VALUES ('Trade Station');
INSERT INTO exchanges (company) VALUES ('eOption');
INSERT INTO exchanges (company) VALUES ('Chase');
INSERT INTO exchanges (company) VALUES ('Wells Fargo');
INSERT INTO exchanges (company) VALUES ('Ally');
INSERT INTO exchanges (company) VALUES ('Health Equity');

-- INSERT INTO users (username)
-- VALUES ('eddielo');

-- UPDATE users SET portfolio_ids = '{1, 2, 3}' WHERE username = 'eddielo';
-- UPDATE users SET exchange_ids = '{0, 1, 1}' WHERE username = 'eddielo';

-- INSERT INTO portfolios (name, user_id)
-- VALUES ('Summary', 1);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-7', 1, 1000, 1000, 0, 0, 0);

-- INSERT INTO portfolios (name, user_id, exchange_id)
-- VALUES ('Vanguard (4-Fund)', 1, 1);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-7', 2, 1000, 1000, 0, 0, 0);

-- INSERT INTO portfolios (name, user_id, exchange_id)
-- VALUES ('Vanguard (Retirement)', 1, 1);

-- UPDATE users SET portfolio_ids = portfolio_ids || '{3}' WHERE username = 'eddielo';
-- UPDATE users SET exchange_ids = exchange_ids || '{1}' WHERE username = 'eddielo';

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-14', 1, 2205, 100, 0, 5, 105);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-14', 2, 2100, 1000, 0, 100, 100);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-14', 3, 105, 100, 0, 5, 5);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-15', 1, 2260, 0, 0, 55, 160);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-15', 2, 2150, 0, 0, 50, 150);

-- INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
-- VALUES ('2018-10-15', 3, 110, 0, 0, 5, 10);