# Django + Vue.js Application

A full-stack web application built with Django (backend) and Vue.js (frontend) using Vite and Vuetify. Features include user registration, login, a simple dashboard, and logout functionality. The app is deployed using Docker Compose with Nginx as a reverse proxy.

## Project Structure
- `backend/`: Django backend with REST API for authentication.
- `frontend/`: Vue.js frontend with Vite and Vuetify.
- `docker-compose.yml`: Docker Compose configuration for deployment.
- `nginx.conf`: Nginx configuration for the frontend.

## Setup (Development)
1. **Backend**:
   - Navigate to `backend/`.
   - Create and activate a virtual environment: `python3 -m venv venv && source venv/bin/activate`.
   - Install dependencies: `pip install -r requirements.txt`.
   - Run migrations: `python manage.py migrate`.
   - Start the server: `python manage.py runserver`.
2. **Frontend**:
   - Navigate to `frontend/`.
   - Install dependencies: `npm install`.
   - Start the development server: `npm run dev`.
3. Open `http://localhost:5173` to access the app.

## Deployment
1. Ensure Docker and Docker Compose are installed.
2. From the project root, run:
   ```bash
   docker-compose up --build
