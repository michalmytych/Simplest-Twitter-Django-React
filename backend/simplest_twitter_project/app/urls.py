from django.urls import path
from app import api

urlpatterns = [
    path('tweet-list/', api.tweets_list, name="tweets_list")
]
