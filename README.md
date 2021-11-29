# Getting started

Here's how to deploy this project

1. Clone the repo

```sh
git clone https://github.com/LuisIzarra/full-stack-ethereum-develoment.git
```

2. Install the dependencies

```sh
npm install

# or

yarn
```

3. Start the local test node

```sh
npx hardhat node
```

4. Deploy the contract

```sh
ROPSTEN_URL=...
ROPSTEN_PRIVATE_KEY=...
npx hardhat run scripts/deploy.js --network localhost
```
**Replace points in a row, with personal data*

5. Update src/App.js with the values of your contract addresses (greeterAddress and tokenAddress)

6. Run the app

```sh
npm start
```
