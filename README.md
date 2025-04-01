Django + Vue.js Application

Developed Using WSL with Kali Linux for System Administration and Maintenance

This is a full-stack web application built with Django (backend) and Vue.js (frontend) using Vite and Vuetify. It includes user registration, login, a simple dashboard, and logout functionality. The app is deployed using Docker Compose with Nginx as a reverse proxy. This project was initially developed on Windows Subsystem for Linux (WSL) using Kali Linux as the distribution, which was used for system administration and maintenance tasks during development. However, the instructions below are designed to work on any system (Windows, Linux, macOS) as long as the specified dependency versions are used.

Project Structure

backend/: Django backend with REST API for authentication.

frontend/: Vue.js frontend with Vite and Vuetify.

docker-compose.yml: Docker Compose configuration for deployment.

nginx.conf: Nginx configuration for the frontend (located in frontend/).

Prerequisites

To achieve the same result as the original setup, you’ll need the following:

Operating System: Windows 10 or 11 (for WSL), or any Linux/macOS system. The project was tested on Windows using both WSL (Kali Linux) and Git Bash (MINGW64).

Python: Version 3.13 (used in development).

Node.js: Version 20.13.1 (used in development).

Docker and Docker Compose: For deployment.

A web browser to access the app (e.g., Chrome, Firefox).

Git installed to clone the repository.

Setup WSL with Kali Linux (Optional)

This project was initially developed using WSL with Kali Linux for system administration tasks. If you want to replicate this exact environment, follow these steps. Otherwise, you can skip to the next section and use your preferred environment (e.g., Git Bash on Windows, native Linux, or macOS).

Enable WSL on Windows:

wsl --install

Restart your computer if prompted.

Install Kali Linux:

Open the Microsoft Store, search for "Kali Linux," and install it.

Launch Kali Linux from the Start menu and complete the initial setup (set a username and password).

Set Kali Linux as the default WSL distribution:

wsl --set-default kali-linux

Update Kali Linux:

sudo apt update && sudo apt upgrade -y

Install Development Tools

On WSL (Kali Linux)

Install Python 3.13:

sudo apt install -y software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install -y python3.13 python3.13-venv python3.13-dev

Install Node.js 20.13.1:

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

Install Git:

sudo apt install -y git

On Windows (Git Bash) or Other Systems

Install Python 3.13:

Download and install Python 3.13 from the official Python website.

Install Node.js 20.13.1:

Download and install Node.js 20.13.1 from the Node.js website.

Install Git:

On Windows, install Git Bash from git-scm.com.

Clone the Repository

cd ~/Desktop
git clone https://github.com/your-username/django-vue-app.git
cd django-vue-app

Setup (Development)

Backend Setup

cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo "SECRET_KEY=$(python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')" > .env
python manage.py migrate
python manage.py runserver

Frontend Setup

cd frontend
npm install
npm run dev

Access the Application

Open http://localhost:5173 in a browser.

Deployment with Docker Compose

cd ~/Desktop/django-vue-app
docker-compose up --build

Open http://localhost in your browser.

Dependencies and Versions

Backend (Python/Django)

Python: 3.13
asgiref==3.8.1
Django==4.2.17
djangorestframework==3.15.2

Frontend (Node.js/Vue)

Node.js: 20.13.1
npm: 10.8.3
vue@3.5.13
vuetify@3.7.19

Deployment Tools

Docker: 28.0.1
Docker Compose: 2.33.1-desktop.1

Notes for Production

Use a proper database (e.g., PostgreSQL) instead of SQLite.

Set DEBUG = False in backend/settings.py.

Restrict CORS_ALLOWED_ORIGINS to specific domains.

Serve the app over HTTPS.

Troubleshooting

Networking Issues: Ensure the backend is accessible at http://localhost:8000.

Authentication Issues: Clear your browser’s local storage and cache.

Port Conflicts: Ensure ports 8000 (backend) and 5173 (frontend) are free.