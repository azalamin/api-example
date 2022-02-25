// Hide Error Message
document.getElementById('error-message').style.display = 'none';
const loadMeals = () => {
    // Load Data
    const name = document.getElementById('meal-input');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name.value}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        // Show Error Message
        .catch(error => document.getElementById('error-message').style.display = 'block');

    name.value = "";
    // Hide Error Message
    document.getElementById('error-message').style.display = 'none';
}

const displayMeals = (meals) => {
    const mealList = document.getElementById('meal-list');
    mealList.textContent = "";
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
            <div class="card" onclick="loadMealDetails('${meal.idMeal}')">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                    <a class="btn btn-primary" href="${meal.strYoutube}" target="_blank">Go Somewhere</a>
                </div>
            </div>
        </div>
    `
        mealList.appendChild(div)
    });
}

const loadMealDetails = (mealId) => {
    // Load data
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]))
}

const displayDetail = meal => {
    const mealDetailContainer = document.getElementById('meal-detail');
    mealDetailContainer.innerHTML = `
        <div class="card mx-auto" style="width: 22rem">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text mb-0">Category: ${meal.strCategory}</p>
                <p class="card-text">Area: ${meal.strArea}</p>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                <a class="btn btn-primary" href="${meal.strYoutube}" target="_blank">Go Somewhere</a>
            </div>
        </div>
    `
}