# Application REACT - VITE - SOLIDITY = WEB3.0

### https://web3-react-vite-client-app.vercel.app/

 1.Login with Metamask wallet to application.
 
 2. Make online Blockchain Transactions.
 
 3.Random giphy images generated throw API, with every single transaction adjusting by keywords.
 
 4.Tracking transactions history of logged wallets by website smart contract.
 
 5.Reading smart contract messages and consoling to client .
 
 6.Mobile Responsive design.

# INSTRUCTIONS

 - create 2 folders in main directory 
    *1 CLIENT     (for front app)
    *2 SMART_CONTRACT  (for backend logic)

cd CLIENT         *(enter Client root dir)
  ### npm init vite@latest        *(initilising Vite project)       
             *choose framework and variant REACT

cd vite-project-name
 ### npm install

### npm install -D tailwindcss postcss autoprefixer
### npx tailwindcss init -p     (*creates config files*)



copy paste to tailwind.config.js:
module.exports = {  content: ["./src/**/*.{html,js}"],  theme: {    extend: {},  },  plugins: [],}


copy paste to ./src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;



### npm run dev 
### npm run build
