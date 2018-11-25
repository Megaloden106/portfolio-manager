# Portfolio Manager Page

> Project description

## Related Projects

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#Requirements)
<!-- 1. [Development](#development) -->
1. [API Routes](#API)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.11.3
- PostgreSQL 10.5

<!-- ## Development -->

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API Routes

### User

- GET /api/user/session
- GET /api/user/logout
- POST /api/user/login
- POST /api/user/register

### Portfolio

<!-- - GET /api/portfolio/:portfolioId -->
- POST /api/portfolio
- PUT /api/portfolio/:portfolioId
<!-- - DELETE / api/portfolio/:portfolioId -->

### Portfolios

- GET /api/portfolios/:userId

### Exchanges

- GET /api/exchanges
