# Sai Mobiles E-Commerce Website - A Sponsored Project

Sponsored Project built for a real mobile store, Sai Mobiles, which sells smartphones from various brands. This is a fully functional e-commerce platform with both user-facing features and an admin dashboard, implemented using the MERN stack.

🚀 Tech Stack
Frontend: React.js, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB (NoSQL)

Payment Gateway: Braintree (Dummy Payment Integration)

Forms : Formspree

🔑 Features

🛒 User Side

User registration & login with authentication

Browse mobile phones by brand & price

Product search and filters

Add to cart & remove from cart

Checkout process with dummy payment using Braintree

View similar products on product detail page

Contact Us page with Formspree

🔧 Admin Side

Admin login & secure dashboard

Add new products

Update existing product details

Delete products from inventory

📂 Folder Structure

/

├── client/         # React frontend

├── server/         # Express backend

├── config/         # MongoDB & Braintree config

├── controllers/    # Backend logic

├── models/         # MongoDB schemas

├── routes/         # Express API routes

├── README.md       # Project overview

⚙️ How to Run Locally
# Clone the repo
git clone https://github.com/mansimahabdi23/Mobile-Shop-E-commerce-Website.git
cd Mobile-Shop-E-commerce-Website

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Create .env files for both client & server as required (example below)
PORT=8000
MONGO_URI=your_mongodb_uri
BRAINTREE_MERCHANT_ID=your_merchant_id
BRAINTREE_PUBLIC_KEY=your_public_key
BRAINTREE_PRIVATE_KEY=your_private_key
JWT_SECRET=your_jwt_secret

# Start both client and server (in separate terminals)
npm start      # in /client
npm run dev    # in /server

📸 Screenshots
![homepage1](https://github.com/user-attachments/assets/48b8d0ae-7136-42cb-901e-835f3be829b5)
![productpage](https://github.com/user-attachments/assets/7b7f1032-538f-4be4-b300-7a250ee183d0)
![indivdualproductapple](https://github.com/user-attachments/assets/69c942fb-81e8-4626-920d-4c87b0b8d57b)
![filterbyprice](https://github.com/user-attachments/assets/0f2fc3e8-5324-469c-bf01-e139418586bd)
![filterbycat](https://github.com/user-attachments/assets/5eaa987a-0084-410e-b475-2ee3ee4298e8)
![search2](https://github.com/user-attachments/assets/fa94bdb4-a8d5-4959-a0d9-2553f8760c22)
![allorderspage1](https://github.com/user-attachments/assets/0b9d1eff-e85f-4ed6-bada-c3b87b496dec)
![forgetpassword2](https://github.com/user-attachments/assets/a1848610-9116-4894-a393-7131d38f5b15)
![forgetpassword1](https://github.com/user-attachments/assets/e6e0491d-f85a-4047-a8f2-8b6550e9bdb3)
![cartpage2](https://github.com/user-attachments/assets/0747c55c-6a67-46f2-9eed-f5fc618cd086)
![ifapersondoesnotlogsin](https://github.com/user-attachments/assets/c9b0a682-066e-4574-b6c7-a8e2771e10d4)
![paymentpage](https://github.com/user-attachments/assets/f009008b-f84d-4b7f-89da-67a7ef8d989b)
![braintreetransaction](https://github.com/user-attachments/assets/1d25df1f-ba28-409d-8dbb-5926d491a9f7)
![userprofile1](https://github.com/user-attachments/assets/cb1f4e93-f2ef-4634-8797-46d5150839a6)
![itemaddedtocartnumber](https://github.com/user-attachments/assets/1b03bd73-1fd7-4bd4-be4a-3ace7f65b812)





