from django.urls import path, include
from rest_framework import routers, urlpatterns
from rest_framework.routers import DefaultRouter
from booking import views

router = DefaultRouter()
router.register(r'booking', views.BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]