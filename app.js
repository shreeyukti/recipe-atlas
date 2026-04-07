const recipes = [
  {
    id: 1,
    name: "Masala Dosa",
    country: "India",
    type: "Vegetarian",
    time: 30,
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Rice batter", "Urad dal", "Potato", "Onion", "Mustard seeds", "Spices"],
    steps: [
      "Prepare dosa batter and ferment it.",
      "Cook potato masala with onion and spices.",
      "Spread batter on hot tawa.",
      "Add masala filling inside.",
      "Fold and serve hot."
    ]
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    country: "India",
    type: "Vegetarian",
    time: 35,
    img: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Onion", "Spices"],
    steps: [
      "Cook onion and tomato gravy.",
      "Blend it into a smooth paste.",
      "Add butter, cream, and spices.",
      "Put paneer cubes into gravy.",
      "Cook for a few minutes and serve."
    ]
  },
  {
    id: 3,
    name: "Butter Chicken",
    country: "India",
    type: "Non-Vegetarian",
    time: 40,
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken", "Butter", "Tomato puree", "Cream", "Garlic", "Spices"],
    steps: [
      "Marinate and cook the chicken.",
      "Prepare buttery tomato gravy.",
      "Add cream and spices.",
      "Mix chicken into the gravy.",
      "Simmer and serve with naan or rice."
    ]
  },
  {
    id: 4,
    name: "Margherita Pizza",
    country: "Italy",
    type: "Vegetarian",
    time: 25,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
    steps: [
      "Roll out the pizza dough.",
      "Spread tomato sauce on top.",
      "Add mozzarella cheese.",
      "Bake until crisp and golden.",
      "Top with basil and serve."
    ]
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    country: "Italy",
    type: "Vegetarian",
    time: 20,
    img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Pasta", "Butter", "Cream", "Parmesan cheese", "Garlic"],
    steps: [
      "Boil pasta until soft.",
      "Prepare sauce with butter, cream, and garlic.",
      "Add parmesan cheese to sauce.",
      "Mix pasta into the sauce.",
      "Serve warm."
    ]
  },
  {
    id: 6,
    name: "Chicken Lasagna",
    country: "Italy",
    type: "Non-Vegetarian",
    time: 45,
    img: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Lasagna sheets", "Chicken", "Tomato sauce", "Cheese", "White sauce"],
    steps: [
      "Cook chicken filling with sauce.",
      "Layer lasagna sheets, filling, and sauces.",
      "Add cheese on top.",
      "Bake until golden.",
      "Cool slightly and serve."
    ]
  },
  {
    id: 7,
    name: "Sushi",
    country: "Japan",
    type: "Non-Vegetarian",
    time: 25,
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Sushi rice", "Nori", "Fish", "Cucumber", "Soy sauce"],
    steps: [
      "Cook and season sushi rice.",
      "Place nori sheet on mat.",
      "Spread rice over nori.",
      "Add fillings and roll tightly.",
      "Cut into pieces and serve."
    ]
  },
  {
    id: 8,
    name: "Ramen",
    country: "Japan",
    type: "Non-Vegetarian",
    time: 30,
    img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Ramen noodles", "Broth", "Egg", "Chicken", "Spring onion"],
    steps: [
      "Prepare flavorful broth.",
      "Cook ramen noodles.",
      "Add noodles to the broth.",
      "Top with egg, chicken, and spring onion.",
      "Serve hot."
    ]
  },
  {
    id: 9,
    name: "Vegetable Tempura",
    country: "Japan",
    type: "Vegetarian",
    time: 15,
    img: "https://images.unsplash.com/photo-1713810979948-bfde10823f4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Vegetables", "Flour", "Cornstarch", "Cold water", "Oil"],
    steps: [
      "Cut vegetables into pieces.",
      "Prepare light tempura batter.",
      "Dip vegetables into batter.",
      "Deep fry until crisp.",
      "Serve immediately."
    ]
  },
  {
    id: 10,
    name: "Tacos",
    country: "Mexico",
    type: "Non-Vegetarian",
    time: 15,
    img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Tortilla", "Chicken", "Lettuce", "Cheese", "Salsa"],
    steps: [
      "Cook the chicken with seasoning.",
      "Warm the tortillas.",
      "Fill with chicken, lettuce, cheese, and salsa.",
      "Fold and serve."
    ]
  },
  {
    id: 11,
    name: "Guacamole",
    country: "Mexico",
    type: "Gluten-Free",
    time: 10,
img: "https://plus.unsplash.com/premium_photo-1681406689563-247f41ec5ac6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Avocado", "Onion", "Tomato", "Lime", "Salt", "Coriander"],
    steps: [
      "Mash ripe avocado.",
      "Add chopped onion and tomato.",
      "Mix in lime juice and salt.",
      "Add coriander and mix well.",
      "Serve fresh."
    ]
  },
  {
    id: 12,
    name: "Quesadilla",
    country: "Mexico",
    type: "Vegetarian",
    time: 20,
    img: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Tortilla", "Cheese", "Bell peppers", "Onion", "Butter"],
    steps: [
      "Place cheese and vegetables inside tortilla.",
      "Fold tortilla in half.",
      "Cook on pan until golden.",
      "Cut into slices and serve."
    ]
  },
{
    id: 13,
    name: "Koshari",
    country: "Egypt",
    type: "Vegetarian",
    time: 35,
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Rice", "Lentils", "Pasta", "Chickpeas", "Tomato sauce", "Fried onions"],
    steps: [
        "Cook rice, lentils, and pasta separately.",
        "Mix them together in a bowl.",
        "Top with tomato sauce and chickpeas.",
        "Garnish with crispy fried onions and serve."
    ]
},
{
    id: 14,
    name: "Falafel (Ta’ameya)",
    country: "Egypt",
    type: "Vegetarian",
    time: 20,
    img: "https://images.unsplash.com/photo-1680405531955-8b4981bb1b0c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Fava beans", "Parsley", "Coriander", "Garlic", "Onion", "Spices", "Oil"],
    steps: [
        "Soak and grind fava beans with herbs and spices.",
        "Shape the mixture into small balls or patties.",
        "Deep fry until crispy and golden brown.",
        "Serve hot with bread or dip."
    ]
},
{
    id: 15,
    name: "Chicken Shawarma",
    country: "Egypt",
    type: "Non-Vegetarian",
    time: 25,
    img: "https://images.unsplash.com/photo-1676300187013-7540d4e9440d?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Chicken", "Yogurt", "Garlic", "Spices", "Pita bread", "Vegetables"],
    steps: [
        "Marinate chicken with yogurt, garlic, and spices.",
        "Cook the chicken until tender and slightly crispy.",
        "Slice into thin strips.",
        "Wrap in pita bread with vegetables and sauce."
    ]
}
];

function getUserRecipes() {
  return JSON.parse(localStorage.getItem("userRecipes")) || [];
}

function getAllRecipes() {
  return [...recipes, ...getUserRecipes()];
}

function goToCountry(country) {
  localStorage.setItem("country", country);
  window.location.href = "country-recipes.html";
}

function openRecipe(id) {
  localStorage.setItem("recipeId", id);
  window.location.href = "recipe-details.html";
}

/* ---------- LOAD RECIPES ---------- */
function loadRecipes() {
  const country = localStorage.getItem("country");

  document.getElementById("countryTitle").innerText = country;
  document.getElementById("newRecipeCountry").value = country;

  const maps = {
    India: "https://commons.wikimedia.org/wiki/Special:Redirect/file/India%20%28orthographic%20projection%29.svg",
    Italy: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Italy%20%28orthographic%20projection%29.svg",
    Japan: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Japan%20%28orthographic%20projection%29.svg",
    Mexico: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mexico%20%28orthographic%20projection%29.svg",
    Egypt: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mexico%20%28orthographic%20projection%29.svg"
  };

  document.getElementById("mapTitle").innerText = country + " Map";
  document.getElementById("countryMap").src = maps[country] || "";

  const all = getAllRecipes();
  const countryRecipes = all.filter(r => r.country === country);

  const search = document.getElementById("searchInput");
  const type = document.getElementById("typeFilter");
  const time = document.getElementById("timeFilter");

  function applyFilter() {
    const filtered = countryRecipes.filter(r => {
      return (
        r.name.toLowerCase().includes(search.value.toLowerCase()) &&
        (type.value === "all" || r.type === type.value) &&
        (time.value === "all" || r.time <= Number(time.value))
      );
    });

    displayRecipes(filtered);
  }

  search.oninput = applyFilter;
  type.onchange = applyFilter;
  time.onchange = applyFilter;

  displayRecipes(countryRecipes);
}

/* ---------- DISPLAY ---------- */
function displayRecipes(list) {
  const box = document.getElementById("recipeList");
  const empty = document.getElementById("emptyState");

  box.innerHTML = "";

  if (list.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  list.forEach(r => {
    box.innerHTML += `
      <div class="recipe-card">
        <img src="${r.img}">
        <h3>${r.name}</h3>
        <p>${r.type}</p>
        <p>${r.time} mins</p>
        <button onclick="openRecipe(${r.id})">View</button>
      </div>
    `;
  });
}

/* ---------- ADD RECIPE ---------- */
function submitUserRecipe() {
  const name = document.getElementById("newRecipeName").value.trim();
  const country = document.getElementById("newRecipeCountry").value.trim();
  const time = Number(document.getElementById("newRecipeTime").value);
  const type = document.getElementById("newRecipeType").value;
  const img = document.getElementById("newRecipeImg").value.trim();
  const ing = document.getElementById("newRecipeIngredients").value;
  const steps = document.getElementById("newRecipeSteps").value;

  if (!name || !type || !ing || !steps) {
    alert("Fill all fields!");
    return;
  }

  if (!time || time <= 0) {
    alert("Cooking time must be positive!");
    return;
  }

  const userRecipes = getUserRecipes();

  userRecipes.push({
    id: Date.now(),
    name,
    country,
    type,
    time,
    img: img || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    ingredients: ing.split(",").map(i => i.trim()),
    steps: steps.split(",").map(s => s.trim())
  });

  localStorage.setItem("userRecipes", JSON.stringify(userRecipes));

  alert("Recipe added!");
  loadRecipes();
}

/* ---------- LOAD DETAILS ---------- */
function loadDetails() {
  const id = localStorage.getItem("recipeId");
  const all = getAllRecipes();
  const r = all.find(x => x.id == id);

  document.getElementById("recipeDetails").innerHTML = `
    <h2>${r.name}</h2>
    <img src="${r.img}">
    <p><b>Time:</b> ${r.time} mins</p>

    <h3>Ingredients</h3>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Method</h3>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
  `;

  loadReviews(id);
  setupStarRating();
}

/* ---------- REVIEWS ---------- */
function submitReview() {
  const id = localStorage.getItem("recipeId");
  const name = document.getElementById("name").value;
  const rating = parseInt(document.getElementById("rating").value);
  const comment = document.getElementById("comment").value;

  if (!rating || rating < 1 || rating > 5) {
    alert("Select rating!");
    return;
  }

  let data = JSON.parse(localStorage.getItem("reviews")) || {};
  if (!data[id]) data[id] = [];

  data[id].push({ name, rating, comment });
  localStorage.setItem("reviews", JSON.stringify(data));

  loadReviews(id);
}

function loadReviews(id) {
  const data = JSON.parse(localStorage.getItem("reviews")) || {};
  const list = data[id] || [];

  document.getElementById("reviewList").innerHTML =
    list.map(r => `<p><b>${r.name}</b> (${"⭐".repeat(r.rating)}): ${r.comment}</p>`).join("");
}

/* ---------- STAR ---------- */
function setupStarRating() {
  const stars = document.querySelectorAll(".star-rating span");
  const input = document.getElementById("rating");

  stars.forEach(star => {
    star.onclick = () => {
      const val = star.getAttribute("data-value");
      input.value = val;

      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < val; i++) {
        stars[i].classList.add("active");
      }
    };
  });
}

/* ---------- LOAD ---------- */
window.onload = () => {
  if (document.getElementById("recipeList")) loadRecipes();
  if (document.getElementById("recipeDetails")) loadDetails();
};
