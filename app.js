/* ---------- AUTH HELPERS ---------- */
async function getCurrentUser() {
  const res = await fetch('/api/auth/me');
  const data = await res.json();
  return data.user;
}

async function logout() {
  await fetch('/api/auth/logout', { method: 'POST' });
  window.location.href = 'login.html';
}

/* ---------- NAV AUTH BUTTONS ---------- */
async function setupNav() {
  const user = await getCurrentUser();
  const nav = document.getElementById('navAuth');
  if (!nav) return;

  if (user) {
    nav.innerHTML = `
      <span style="font-weight:bold; color:#5e7242">Hi, ${user.username}!</span>
      <button onclick="logout()">Logout</button>
    `;
  } else {
    nav.innerHTML = `<a href="login.html">Login</a>`;
  }
}

/* ---------- GO TO COUNTRY ---------- */
function goToCountry(country) {
  localStorage.setItem("country", country);
  window.location.href = "country-recipes.html";
}

/* ---------- OPEN RECIPE ---------- */
function openRecipe(id) {
  localStorage.setItem("recipeId", id);
  window.location.href = "recipe-details.html";
}

/* ---------- LOAD RECIPES ---------- */
async function loadRecipes() {
  const country = localStorage.getItem("country");

  document.getElementById("countryTitle").innerText = country;
  document.getElementById("newRecipeCountry").value = country;

  const maps = {
    India: "https://commons.wikimedia.org/wiki/Special:Redirect/file/India%20%28orthographic%20projection%29.svg",
    Italy: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Italy%20%28orthographic%20projection%29.svg",
    Japan: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Japan%20%28orthographic%20projection%29.svg",
    Mexico: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mexico%20%28orthographic%20projection%29.svg",
    Egypt: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egypt%20%28orthographic%20projection%29.svg",
    Finland: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Finland%20%28orthographic%20projection%29.svg",
    "South Korea": "https://commons.wikimedia.org/wiki/Special:Redirect/file/South%20Korea%20%28orthographic%20projection%29.svg",
    France: "https://commons.wikimedia.org/wiki/Special:Redirect/file/France%20%28orthographic%20projection%29.svg",
    Germany: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Germany%20%28orthographic%20projection%29.svg",
    Vietnam: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vietnam%20%28orthographic%20projection%29.svg",
    Spain: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spain%20%28orthographic%20projection%29.svg",
    Thailand: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Thailand%20%28orthographic%20projection%29.svg",
    Sweden: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweden%20%28orthographic%20projection%29.svg",
    "New Zealand": "https://commons.wikimedia.org/wiki/Special:Redirect/file/New%20Zealand%20%28orthographic%20projection%29.svg",
    Wales: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Wales_in_the_UK_and_Europe.svg/1920px-Wales_in_the_UK_and_Europe.svg.png",
    Philippines: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Philippines%20%28orthographic%20projection%29.svg",
  };

  document.getElementById("mapTitle").innerText = country + " Map";
  document.getElementById("countryMap").src = maps[country] || "";

  const res = await fetch(`/api/recipes?country=${encodeURIComponent(country)}`);
  const countryRecipes = await res.json();

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
        <button onclick="openRecipe('${r._id}')">View</button>
      </div>
    `;
  });
}

/* ---------- RANDOM RECIPE ---------- */
async function goToRandomRecipe() {
  const res = await fetch('/api/recipes');
  const recipes = await res.json();
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  localStorage.setItem("recipeId", random._id);
  window.location.href = "recipe-details.html";
}

/* ---------- ADD RECIPE ---------- */
async function submitUserRecipe() {
  const user = await getCurrentUser();
  if (!user) {
    alert("You must be logged in to submit a recipe!");
    window.location.href = "login.html";
    return;
  }

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

  const res = await fetch('/api/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name, country, type, time,
      img: img || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      ingredients: ing.split(",").map(i => i.trim()),
      steps: steps.split(",").map(s => s.trim())
    })
  });

  if (res.ok) {
    alert("Recipe submitted!");
    loadRecipes();
  } else {
    const data = await res.json();
    alert(data.message || "Failed to submit recipe");
  }
}

/* ---------- LOAD DETAILS ---------- */
async function loadDetails() {
  const id = localStorage.getItem("recipeId");

  const res = await fetch(`/api/recipes/${id}`);
  const r = await res.json();

  document.getElementById("recipeDetails").innerHTML = `
    <h2>${r.name}</h2>
    <img src="${r.img}">
    <p><b>Time:</b> ${r.time} mins</p>
    <h3>Ingredients</h3>
    <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>Method</h3>
    <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    <button onclick="toggleFavorite('${r._id}')" id="favBtn">❤️ Add to Favorites</button>
  `;

  loadReviews(id);
  setupStarRating();
  checkFavorite(r._id);
}

/* ---------- FAVORITES ---------- */
async function toggleFavorite(recipeId) {
  const user = await getCurrentUser();
  if (!user) {
    alert("You must be logged in to save favorites!");
    window.location.href = "login.html";
    return;
  }

  const favs = await fetch('/api/favorites').then(r => r.json());
  const isFav = favs.some(f => f._id === recipeId);

  if (isFav) {
    await fetch(`/api/favorites/${recipeId}`, { method: 'DELETE' });
    document.getElementById("favBtn").innerText = "❤️ Add to Favorites";
  } else {
    await fetch(`/api/favorites/${recipeId}`, { method: 'POST' });
    document.getElementById("favBtn").innerText = "💚 Saved!";
  }
}

async function checkFavorite(recipeId) {
  const user = await getCurrentUser();
  if (!user) return;
  const favs = await fetch('/api/favorites').then(r => r.json());
  const isFav = favs.some(f => f._id === recipeId);
  if (isFav) document.getElementById("favBtn").innerText = "💚 Saved!";
}

/* ---------- REVIEWS ---------- */
async function submitReview() {
  const user = await getCurrentUser();
  if (!user) {
    alert("You must be logged in to leave a review!");
    window.location.href = "login.html";
    return;
  }

  const id = localStorage.getItem("recipeId");
  const stars = parseInt(document.getElementById("rating").value);
  const comment = document.getElementById("comment").value;

  if (!stars || stars < 1 || stars > 5) {
    alert("Please select a star rating!");
    return;
  }

  if (!comment.trim()) {
    alert("Please write a comment!");
    return;
  }

  const res = await fetch(`/api/reviews/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ stars, comment })
  });

  if (res.ok) {
    document.getElementById("comment").value = "";
    document.getElementById("rating").value = "";
    document.querySelectorAll(".star-rating span").forEach(s => s.classList.remove("active"));
    loadReviews(id);
  }
}

async function loadReviews(id) {
  const res = await fetch(`/api/reviews/${id}`);
  const list = await res.json();

  document.getElementById("reviewList").innerHTML = list.length === 0
    ? "<p>No reviews yet. Be the first!</p>"
    : list.map(r => `
        <p><b>${r.username}</b> (${"⭐".repeat(r.stars)}): ${r.comment}</p>
      `).join("");
}

/* ---------- STAR RATING ---------- */
function setupStarRating() {
  const stars = document.querySelectorAll(".star-rating span");
  const input = document.getElementById("rating");

  stars.forEach(star => {
    star.onclick = () => {
      const val = star.getAttribute("data-value");
      input.value = val;
      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < val; i++) stars[i].classList.add("active");
    };
  });
}

/* ---------- LOAD ---------- */
window.onload = async () => {
  await setupNav();
  if (document.getElementById("recipeList")) loadRecipes();
  if (document.getElementById("recipeDetails")) loadDetails();
};