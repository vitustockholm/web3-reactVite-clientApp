# Deployed Application on React template Vite Theme

https://web3-react-vite-client-app.vercel.app/

 Login with Metamask wallet
 Send Blockchain Transactions online
 Random giphy image generated throw API with every single transaction
 Tracking transactions history of wallet
 Leaves message in smart contract .Sol
 Mobile Responsive design

# INSTRUCTIONS

 - create 2folder in main directory 
    1 CLIENT
    2 SMART_CONTRACT

cd CLIENT 
   npm init vite@latest            
             *choose framework and variant REACT

cd vite-project-name
   npm install
      npm run dev

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p     (*creates config files*)



copy paste to tailwind.config.js:
module.exports = {  content: ["./src/**/*.{html,js}"],  theme: {    extend: {},  },  plugins: [],}


copy paste to ./src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;



### npm run dev 
### npm run build
