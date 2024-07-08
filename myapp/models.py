from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Nutrition(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    calories = models.FloatField()
    protein = models.FloatField()
    fat = models.FloatField()
    carbohydrates = models.FloatField()

    def __str__(self):
        return f'Nutrition for {self.ingredient.name}'

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()

    def __str__(self):
        return self.content[:50]

class Option(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    option_name = models.CharField(max_length=100)
    option_value = models.CharField(max_length=100)

    def __str__(self):
        return self.option_name

class Recipe(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ingredients = models.ManyToManyField(Ingredient)
    instructions = models.TextField()
    final_output = models.TextField()

    def __str__(self):
        return f'Recipe by {self.user.username}'

# Additional user profile information (if needed)
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    def __str__(self):
        return self.user.username
