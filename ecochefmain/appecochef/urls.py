from django.urls import path
from . import views
from .views import HomeView, SignupView, LoginView
from django.conf.urls.static import static


urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('screen4/', views.screen4, name='screen4'),
    path('logout/', views.logout_view, name='logout'),

    
]


