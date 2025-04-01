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
source venv/bin/activate  # Linux/WSL
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
Backend (Python)
Django==4.2.17

djangorestframework==3.15.2

djangorestframework-simplejwt==5.3.1

Full list in backend/requirements.txt

Frontend (Node.js)
vue@3.5.13

vuetify@3.7.19

vite@6.2.4

Full list in frontend/package.json

Project Structure
```
django-vue-app/
├── backend/            # Django project
│   ├── core/          # Main app
│   ├── manage.py
│   └── requirements.txt
├── frontend/          # Vue.js project
│   ├── public/
│   ├── src/
│   └── vite.config.js
├── docker-compose.yml
└── README.md
```

Troubleshooting

Issue	           |        Solution
                 |
Network Errors	 |        Ensure backend is running on port 8000
Docker Issues	   |        Check port conflicts (80, 8000)
Authentication   |      	Clear browser localStorage if login fails
WSL Specific	   |        Use localhost instead of 127.0.0.1



