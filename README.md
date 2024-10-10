# NoTraffic Intersections Management

## Overview

This project is a full-stack application that allows users to manage intersections for the NoTraffic System. Users can create, read, update, and delete intersection entries through a React frontend and a Django backend.

## Technologies Used

- **Frontend**: React, Axios, React Router
- **Backend**: Django, Django REST Framework
- **Database**: SQLite 
- **Styling**: Bootstrap

## Features

- **Manage Intersections**: Add, view, edit, and delete intersections.
- **Responsive UI**: Intuitive user interface for managing data.

## Setup Instructions

### Prerequisites

- [Python 3](https://www.python.org/downloads/)
- [Django](https://www.djangoproject.com/) 
- [Django REST Framework](https://www.django-rest-framework.org/)

### Backend Setup

**Clone the repository**:  
- `git clone`  
- `cd django-crud`

**Navigate to the backend directory**:  
- `cd backend`

**Install dependencies**:  
`pip install django djangorestframework` (or pip3)

**Create a new Django project and app (if not done already)**:  
`django-admin startproject notraffic`  
`cd notraffic`  
`django-admin startapp intersections`

**Add the app to `settings.py`**:  
Open `notraffic/settings.py` and add `intersections` and `rest_framework` to the `INSTALLED_APPS` list:

```python
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'intersections',
]
