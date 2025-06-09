from django.urls import path

from . import views

app_name = 'polls'

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('users/', views.list_users, name='list_users'),
]
