const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const resultheading = document.getElementById("result-heading");
const singlemeal = document.getElementById("single-meal");
const meal = document.getElementById("meals");

function findMeal(e){
    e.preventDefault();
    singlemeal.innerHTML = "";
    const test = search.value;
    if(test.trim())
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${test}`)
        .then(res=>res.json())
        .then(data=>{
            resultheading.innerHTML=`<h2>Search result for '${test}' </h2>`;
            meal.innerHTML = data.meals.map(item=>`
            <div class="meal">
            <img src="${item.strMealThumb}" alt="${item.strMeal}"/>
            <div class="meal-info" data-mealID="${item.idMeal}">
            <h3>${item.strMeal}</h3>
            </div>
            </div>
            `)
            .join('');
            console.log(data);
        });
    }
    else{
        alert("Please Enter Something");
    }
}


submit.addEventListener("submit", findMeal);