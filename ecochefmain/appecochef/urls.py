from django.urls import path
from . import views

urlpatterns = [
    path('screen1/', views.screen1, name='screen1'),
    path('screen2/', views.screen2, name='screen2'),
    path('screen3/', views.screen3, name='screen3'),
    path('screen4/', views.screen4, name='screen4'),
]
