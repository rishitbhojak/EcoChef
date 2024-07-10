from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
import openai
from .models import RecipeInput
from openai import OpenAI

# Initialize the OpenAI client with the API key
client = OpenAI(api_key='I wont give you hehe')

def generate_recipe(input_data):
    response = client.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f"Generate a recipe with the following details:\n\nIngredients: {input_data.ingredients}\nCuisine: {input_data.cuisine}\nMeal: {input_data.meal}\nTime: {input_data.time}\nSpice level: {input_data.spice_level}\nDietary preference: {input_data.dietary_preference}\nAllergies: {input_data.allergies}\nNutrition goals: {input_data.nutrition_goals}\nNotes: {input_data.notes}",
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return response.choices[0].text

@csrf_exempt
def screen1(request):
    if request.method == 'POST':
        ingredients = request.POST.get('ingredients')
        request.session['ingredients'] = ingredients
        return redirect('screen2')
    return render(request, 'appecochef/screen1.html')

@csrf_exempt
def screen2(request):
    if request.method == 'POST':
        cuisine = request.POST.get('cuisine')
        meal = request.POST.get('meal')
        time = request.POST.get('time')
        spice_level = request.POST.get('spice_level')  # Ensure this matches the form name
        request.session['cuisine'] = cuisine
        request.session['meal'] = meal
        request.session['time'] = time
        request.session['spice_level'] = spice_level  # Set spice_level in session
        return redirect('screen3')
    return render(request, 'appecochef/screen2.html')

@csrf_exempt
def screen3(request):
    if request.method == 'POST':
        dietary_preference = request.POST.get('dietary_preference')  # Ensure this matches the form name
        allergies = request.POST.get('allergies')
        nutrition_goals = request.POST.get('nutrition_goals')  # Ensure this matches the form name
        request.session['dietary_preference'] = dietary_preference  # Set dietary_preference in session
        request.session['allergies'] = allergies
        request.session['nutrition_goals'] = nutrition_goals  # Set nutrition_goals in session
        return redirect('screen4')
    return render(request, 'appecochef/screen3.html')

@csrf_exempt
def screen4(request):
    if request.method == 'POST':
        notes = request.POST.get('notes')
        recipe_input = RecipeInput(
            ingredients=request.session.get('ingredients', ''),
            cuisine=request.session.get('cuisine', ''),
            meal=request.session.get('meal', ''),
            time=request.session.get('time', ''),
            spice_level=request.session.get('spice_level', ''),  # Ensure this is not empty
            dietary_preference=request.session.get('dietary_preference', ''),  # Ensure this is not empty
            allergies=request.session.get('allergies', ''),
            nutrition_goals=request.session.get('nutrition_goals', ''),  # Ensure this is not empty
            notes=notes
        )
        recipe_input.save()
        recipe = generate_recipe(recipe_input)
        return render(request, 'appecochef/recipe_screen.html', {'recipe': recipe})
    return render(request, 'appecochef/screen4.html')
