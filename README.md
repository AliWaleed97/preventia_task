# preventia_task
  ## How to run backend
  1. First ``` pipenv ``` should be installed globally
  2. Enter virtual environment using ``` pipenv shell ```
  3. Install needed dependencies using ``` pipenv install ```
  4. Add a ```.env``` file in the same directory of settings.py
  5. Inside the ```.env``` insert your database credentials as a url ```DATABASE_URL=mysql://user:password@127.0.0.1:3306/social_app```
  6. ```cd /social_app``` then Run backend using ```python manage.py runserver```
  
  ## How to run frontend
  1. First ``` npm ``` and ```angular``` should be installed globally
  2. ``` cd frontend/``` then install needed dependencies using ``` npm i```
  3. ```npm start``` to run frontend
  
  ## To access admin stories from DjangoAdmin.
  1. First create a super user using ```python manage.py createsuperuser```
  2. Navigate to ```localhost:8000/admin```
