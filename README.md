# Simplest-Twitter-Django-React
Bardzo prosta aplikacja którą napisałem na początku nauki integracji back-endu Django oraz front-endu React.

## Jak uruchomić aplikację Django:

_Wymagany Python 3, Pip oraz wolny port 8000_

cd backend/

_Tworzymy virtualenv:_
python3 -m venv venv

_Aktywujemy virtualenv:_
source venv/bin/activate

_Instalujemy wymagane zależności:_
pip3 install -r requirements.txt

cd simplest_twitter_project/

_Tworzymy pliki migracji i migrujemy modele:_
python3 manage.py makemigrations

python3 manage.py migrate

_opcjonalnie można wypełnić bazę danych gotowymi danymi:_

python3 manage.py loaddata fixtures/sample_data.json

_Możemy uruchomić aplikację:_

python3 manage.py runserver

_Aplikacja powinna nasłuchiwać tutaj: http://127.0.0.1:8000/api/tweet-list/_


## Jak uruchomić aplikację React:

_Wymagany Node.js, npm/npx oraz wolny port 3000_

cd frontend/simplest-frontend-app

_Pobieramy zależności i uruchamiamy aplikację:_

npm install && npm start

_Większość błędów z uruchamianiem front-endu można rozwiązać usuwając /node_modules i wykonując ponownie:_

npm install



