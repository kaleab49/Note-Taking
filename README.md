# Django-React Authentication App

A full-stack application with Django backend and React frontend for user authentication and note management.

## Issues Fixed

### 1. Frontend API Interceptor Issue
- **Problem**: Missing `return config` in axios interceptor causing "TypeError: Cannot read properties of undefined (reading 'cancelToken')"
- **Fix**: Added `return config;` in the request interceptor in `frontend/src/api.js`

### 2. Backend Serializer Issue
- **Problem**: Incorrect serializer assignment in `NoteListCreate` view
- **Fix**: Changed `serializer_class = Note` to `serializer_class = NoteSerializer` in `backend/api/views.py`

### 3. CORS Configuration
- **Problem**: Typo in CORS settings
- **Fix**: Changed `CORS_ALLOWS_CREDINTIALS` to `CORS_ALLOW_CREDENTIALS` in `backend/backend/settings.py`

### 4. Missing Dependencies
- **Problem**: Frontend missing required dependencies
- **Fix**: Installed `axios`, `react-router-dom`, and `jwt-decode` in frontend

### 5. Environment Configuration
- **Problem**: Missing API URL configuration
- **Fix**: Created `.env` file in frontend with `VITE_API_URL=http://localhost:8000`

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r ../require.txt
   ```

3. Run Django migrations:
   ```bash
   python manage.py migrate
   ```

4. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## API Endpoints

- `POST /api/user/register/` - User registration
- `POST /api/token/` - User login (get JWT tokens)
- `POST /api/token/refresh/` - Refresh JWT token
- `GET /api/notes/` - Get user's notes (authenticated)
- `POST /api/notes/` - Create a new note (authenticated)
- `DELETE /api/notes/delete/<id>/` - Delete a note (authenticated)

## Features

- User registration and login with JWT authentication
- Protected routes in frontend
- Note creation and management
- Responsive design with error handling
- CORS enabled for frontend-backend communication

## Troubleshooting

If you encounter the "cancelToken" error again:
1. Make sure the axios interceptor in `frontend/src/api.js` returns the config
2. Check that the `.env` file exists in the frontend directory
3. Verify that all dependencies are installed in both frontend and backend
4. Ensure both servers are running (Django on port 8000, React on port 5173) 