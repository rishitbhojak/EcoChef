from django.db import models

class RecipeInput(models.Model):
    ingredients = models.TextField()
    cuisine = models.CharField(max_length=255)
    meal = models.CharField(max_length=255)
    time = models.CharField(max_length=255)
    spice_level = models.CharField(max_length=255)
    dietary_preference = models.CharField(max_length=255)
    allergies = models.CharField(max_length=255)
    nutrition_goals = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.cuisine
