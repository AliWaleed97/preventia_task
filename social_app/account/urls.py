from django.urls import path
from .views import RegisterApi
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
      path('register', RegisterApi.as_view()),
      path('login', TokenObtainPairView.as_view()),
]