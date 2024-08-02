from django.urls import path
from . import views
from .views import HomeView, SignupView, LoginView
from django.conf.urls.static import static


urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('screen1/', views.screen1, name='screen1'),
    path('screen2/', views.screen2, name='screen2'),
    path('screen4/', views.screen4, name='screen4'),
    path('logout/', views.logout_view, name='logout'),
    path('try-now/', views.try_now_view, name='try_now'),
]


