from django.urls import path
from . import views

app_name = 'recipeManager'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.RecipeDetailView.as_view(), name='recipeDetail')
]