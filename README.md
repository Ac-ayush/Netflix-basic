# Netflix Clone

A full-stack Netflix clone built with React, Node.js, and MongoDB.

## Project Structure

The project is divided into two main parts:

- `netflix/` - Frontend React application
- `backend/` - Backend Node.js server

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB

## Getting Started

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd netflix
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the netflix directory with the following variables:

   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will run on `http://localhost:5173`

## Features

- User authentication (signup/login)
- Browse movies and TV shows
- Responsive design
- Movie details and trailers
- User profiles
- Search functionality

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
