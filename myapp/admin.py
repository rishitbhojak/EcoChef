from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Ingredient, Nutrition, Note, Option, Recipe, UserProfile

admin.site.register(Ingredient)
admin.site.register(Nutrition)
admin.site.register(Note)
admin.site.register(Option)
admin.site.register(Recipe)
admin.site.register(UserProfile)
