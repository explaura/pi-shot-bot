# Beverage Bot

## Overview
A service running on Raspberry Pi which pours beverages when triggered over the internet.

### Liquors
- Dark rum
- Vodka
- Gin
- Cointreau

### Mixers
- Tonic
- Coke
- Lemonade
- Ginger beer
- Lime juice

### Beverages
- Cuba Libre
- Gin & Tonic
- Moscow Mule
- Dark & Stormy
- Gin/Vodka Margarita
- & more...

## Prerequisites

### NodeJS & npm
Current versions used: `npm 6.13.4` & `node.js 12.16.1`

Install with [nvm](https://github.com/creationix/nvm)

### MongoDB
- Configure a MongoDB cluster
- Inside the `.env` file, replace `MONGODB_URL` with your cluster URL, including `<username>` and `<password>` with your cluster username & password

## Dependencies
To install NPM dependencies:

```bash
npm install
```

## Linting
To ensure the linting of Typescript files, run:

```bash
npm run lint
```

## Notes
This project can only run on a Raspberry Pi due to the hardware requirements of the dependency `onoff`.