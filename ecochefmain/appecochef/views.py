# appecochef/views.py
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.decorators import login_required
from .forms import LoginForm, SignUpForm
from .models import RecipeInput
from django.views import View
from django.contrib import messages
from .utils import generate_recipe
from django.http import JsonResponse
import random
import logging
from transformers import logging as transformers_logging
from monsterapi import client
              
api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjJiNWVhYzVjYTViMmJlNTA0NWQ4M2EwNGYxYWMwOTM2IiwiY3JlYXRlZF9hdCI6IjIwMjQtMDctMjVUMDI6Mzk6MzEuODE4MDY5In0.-_xEeyeMxsBV-dgiCxpQGtFaEvURYawGhzxE8r9GFmo'  # Replace 'your-api-key' with your actual Monster API key
monster_client = client(api_key)


transformers_logging.set_verbosity_warning()

tokenizer_logger = logging.getLogger("transformers.tokenization_utils_base")
tokenizer_logger.setLevel(logging.ERROR)

User = get_user_model()

class HomeView(View):
    def get(self, request):
        return render(request, 'appecochef/new_index.html')

# signup view

# login view

# nutritions counter

# image generate

# logout

# screen 1

# screen 2

# screen 3

@csrf_exempt
def screen4(request):
    if request.method == 'POST':
        notes = request.POST.get('notes')
        recipe_input = RecipeInput(
            ingredients=request.session.get('ingredients', ''),
            cuisine=request.session.get('cuisine', ''),
            meal=request.session.get('meal', ''),
            time=request.session.get('time', ''),
            spice_level=request.session.get('spice_level', ''),  
            dietary_preference=request.session.get('dietary_preference', ''),  
            allergies=request.session.get('allergies', ''),
            nutrition_goals=request.session.get('nutrition_goals', ''),  
            notes=notes
        )
        recipe_input.save()
        total_time = float(recipe_input.time)
        prep_time = int(total_time * 0.10)
        cook_time = int(total_time * 0.90)
        calories = recipe_input.nutrition_goals
        # Generate recipe based on the input
        items = [recipe_input.ingredients]
        generated = generate_recipe(items)
        recipes = []
        for text in generated:
            recipe = {}
            sections = text.split("\n")
            for section in sections:
                section = section.strip()
                if section.startswith("title:"):
                    section = section.replace("title:", "")
                    headline = "TITLE"
                    recipe[headline] = section.strip().capitalize()

                    images = generate_image_urls(recipe["TITLE"])
                    img_url = images[0]  
                    
                elif section.startswith("ingredients:"):
                    section = section.replace("ingredients:", "")
                    headline = "INGREDIENTS"
                    section_info = [f"{i+1}: {info.strip().capitalize()}" for i, info in enumerate(section.split("--"))]
                    recipe[headline] = section_info
                elif section.startswith("directions:"):
                    section = section.replace("directions:", "")
                    headline = "DIRECTIONS"
                    section_info = [f"{info.strip().capitalize()}" for i, info in enumerate(section.split("--"))]
                    recipe[headline] = section_info
            recipe["TOTAL_TIME"] = int(total_time)
            recipe["PREP_TIME"] = prep_time
            recipe["COOK_TIME"] = cook_time
            nutrition_values = nu_counter(calories)
            recipe.update(nutrition_values)
            recipes.append(recipe)
        print(recipes)
        print(img_url)
        return render(request, 'appecochef/recipe_screen.html', {'recipes': recipes, 'IMG_URL': img_url})
    
    return render(request, 'appecochef/screen4.html')

# try now