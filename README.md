# JobTASK Frontend

This repository contains the frontend code for the JobTASK project, a single-page web application designed to showcase products with features like searching, filtering, sorting, and pagination. The project is built using React.js with a mobile-first, fully responsive design.

## Features

- **Product Listing with Pagination**: View products with pagination to enhance performance.
- **Search Functionality**: Search for products by name.
- **Filtering Options**: Filter products by brand, category, and price range.
- **Sorting Options**: Sort products by price (Low to High, High to Low) and by date added (Newest first).
- **User Authentication**: Sign in using Google or Email/Password authentication via Firebase.
- **Responsive Design**: Mobile-first approach with fully responsive layouts.
- **Clean UI**: Fixed-size product cards to display essential product details.

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project set up for authentication.

### Installation

1. Clone this repository: git clone https://github.com/yourusername/JobTASK-frontend.git
2. cd JobTASK-frontend
3. npm install
4. REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
5.npm start

