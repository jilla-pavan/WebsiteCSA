# CSA Website Backend

This is the backend server for the CSA Website, built with Node.js and Express.

## Setup

1. Create a `.env` file in the backend directory with:
```
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server

## Project Structure

```
backend/
├── src/
│   ├── config/      # Configuration files
│   ├── controllers/ # Route controllers
│   ├── routes/      # API routes
│   └── server.js    # Main server file
└── ...
```

## API Endpoints

- POST `/api/send-email` - Send a single email
- POST `/api/send-email-with-attachments` - Send email with attachments
- POST `/api/send-bulk-emails` - Send bulk emails 