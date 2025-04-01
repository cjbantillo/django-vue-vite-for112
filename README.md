# Django + Vue.js Full-Stack Application

> **Note**: This project was developed using WSL with Kali Linux for system administration tasks, but works across environments when using the specified dependency versions.

![Django](https://img.shields.io/badge/Django-4.2.17-green)
![Vue.js](https://img.shields.io/badge/Vue.js-3.5.13-brightgreen)
![Vuetify](https://img.shields.io/badge/Vuetify-3.7.19-blue)
![Docker](https://img.shields.io/badge/Docker-28.0.1-blue)

A full-stack web application with Django backend and Vue.js frontend, featuring user authentication and a responsive dashboard. Deployed with Docker Compose and Nginx.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup (Development)](#setup-development)
- [Deployment](#deployment)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

## Features
- ✔️ User registration and login with JWT authentication
- ✔️ Protected dashboard view
- ✔️ Responsive design with Vuetify
- ✔️ Logout functionality
- ✔️ Dockerized deployment

## Technologies
| Component       | Technologies Used                          |
|-----------------|-------------------------------------------|
| **Backend**     | Django 4.2.17, Django REST Framework      |
| **Frontend**    | Vue.js 3, Vite, Vuetify                   |
| **Database**    | SQLite (development), PostgreSQL-ready    |
| **Deployment**  | Docker, Docker Compose, Nginx             |
| **Environment** | Tested on WSL (Kali Linux) and Git Bash   |

## Prerequisites
- Python 3.13
- Node.js 20.13.1
- Docker and Docker Compose
- Git

## Setup (Development)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/django-vue-app.git
cd django-vue-app
```

Backend Setup
```
cd backend
python -m venv venv
source venv/bin/activate  # Linux/WSL: or `venv\Scripts\activate` on Windows
# OR venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Frontend Setup
```
cd ../frontend
npm install
npm run dev
# Access the app at: http://localhost:5173
```

Deployment
```
docker-compose up --build
```

Dependencies
```
## Backend (Python)
From pip list and requirements.txt:

Django==4.2.17 (installed, though requirements.txt lists 5.1.7)
djangorestframework==3.15.2
djangorestframework-simplejwt==5.3.1
django-cors-headers==4.6.0
PyJWT==2.10.1
sqlparse==0.5.2
Full list: See backend/requirements.txt or run pip list
Note: Your installed Django (4.2.17) differs from requirements.txt (5.1.7) and WSL check (5.1.7). Update your environment or requirements.txt for consistency.

## Frontend (Node.js)
From npm list and package.json:

vue@3.5.13
vuetify@3.7.19
vite@6.2.4
@vitejs/plugin-vue@5.2.3
vue-router@4.5.0
axios@1.8.4
@mdi/font@7.4.47
Full list: See frontend/package.json
```

Project Structure
```
django_vue_app/
│
├── backend/                        # Django backend directory
│   ├── accounts/                   # Django app for user authentication
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/             # Database migrations
│   │   │   ├── __init__.py
│   │   │   └── 0001_initial.py     # Initial migration (example)
│   │   ├── models.py               # Django models (e.g., User)
│   │   ├── serializers.py          # DRF serializers for API
│   │   ├── tests.py
│   │   ├── urls.py                 # App-specific URLs
│   │   └── views.py                # API views (e.g., register, login)
│   ├── backend/                    # Django project settings
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py             # Django settings (CORS, JWT, etc.)
│   │   ├── urls.py                 # Main URL configuration
│   │   └── wsgi.py
│   ├── manage.py                   # Django management script
│   ├── .env                        # Environment variables (e.g., SECRET_KEY)
│   ├── requirements.txt            # Python dependencies
│   ├── Dockerfile                  # Dockerfile for backend
│   └── backend-dependencies.txt    # Optional: List of backend dependencies (if created)
│
├── frontend/                       # Vue.js frontend directory
│   ├── dist/                       # Built frontend assets (excluded by .gitignore)
│   ├── node_modules/               # Node.js dependencies (excluded by .gitignore)
│   ├── public/                     # Public assets
│   │   ├── index.html              # Main HTML template
│   │   └── vite.svg                # Vite logo (default)
│   ├── src/                        # Vue.js source code
│   │   ├── assets/                 # Static assets (e.g., images, CSS)
│   │   │   └── main.css            # Main stylesheet
│   │   ├── components/             # Vue components
│   │   │   └── HelloWorld.vue      # Example component (if present)
│   │   ├── views/                  # Vue views (pages)
│   │   │   ├── Dashboard.vue       # Dashboard page
│   │   │   ├── Login.vue           # Login page
│   │   │   └── Register.vue        # Register page
│   │   ├── App.vue                 # Main Vue app component
│   │   ├── main.js                 # Entry point for Vue app
│   │   └── router.js               # Vue Router configuration
│   ├── .gitignore                  # Git ignore for frontend (if separate)
│   ├── index.html                  # Main HTML file (used by Vite)
│   ├── package.json                # Node.js dependencies and scripts
│   ├── package-lock.json           # Locked versions of Node.js dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── Dockerfile                  # Dockerfile for frontend
│   ├── nginx.conf                  # Nginx configuration for frontend
│   └── frontend-dependencies.txt   # Optional: List of frontend dependencies (if created)
│
├── .gitignore                      # Git ignore file for the project
├── docker-compose.yml              # Docker Compose configuration
└── README.md                       # Project documentation
```

Troubleshooting

| Issue                   | Solution                                  |
|-------------------------|-------------------------------------------|
| **Network Errors**      | Ensure backend is running on port 8000    |
| **Docker Issues**       |  Check port conflicts (80, 8000)          |
| **Authentication**      | Clear browser localStorage if login fails |
| **WSL Specific**        | Use localhost instead of 127.0.0.1        |
