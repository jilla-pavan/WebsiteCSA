# CSA Website Frontend

This is the frontend application for the CSA Website, built with React and Vite.

## Setup

1. Create a `.env` file in the frontend directory with:
```
VITE_API_URL=http://localhost:3001/api
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/             # Source code
│   ├── components/  # React components
│   ├── services/    # API services
│   └── ...
├── public/          # Static assets
└── ...
``` 