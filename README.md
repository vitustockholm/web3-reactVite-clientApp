# Application REACT - VITE - SOLIDITY

### https://web3-react-vite-client-app.vercel.app/

 1.Login with Metamask wallet.
 
 2.Safety send Blockchain Transactions online.
 
 3.Random giphy image generated throw API with every single transaction.
 
 4.Tracking transactions history of wallet.
 
 5.Reading smart contract .Sol messages and consoling to client.
 
 6.Mobile Responsive design.

# INSTRUCTIONS

 - create TWO folders in main directory 
    *1 CLIENT     (front app)
    *2 SMART_CONTRACT  (backend logic)

cd CLIENT         *(enter client root dir)
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
