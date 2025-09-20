const Cardcontainer = document.getElementById("card-container");
handleCardContainer = () => {
  fetch("https://dattebayo-api.onrender.com/characters")
    .then((res) => res.json())
    .then((data) => showCard(data.characters));
};
showCard = (data) => {
  data.forEach((el) => {
    Cardcontainer.innerHTML += `
      <div onclick="handlemodal(${el.id})" class="card bg-base-100 shadow-sm w-72 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <figure class="w-full h-64 overflow-hidden">
          <img src="${el.images[1] ? el.images[1] : el.images[0]}" alt="${
      el.name
    }" class="w-full h-full object-cover transition duration-500 hover:scale-110" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ${el.name}
            <div class="badge badge-secondary">${
              el.personal.clan ? el.personal.clan : "unknown"
            }</div>
          </h2>
          <p></p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Naruto</div> 
            <div class="badge badge-outline">Anime</div>
          </div>
        </div>
      </div>
    `;
  });
};

const handlemodal=(id)=>{
  displayModal(id)
}


const displayModal=(anime)=>{
const detailsContainer=document.getElementById('details-container')
}

// QUOTES SECTION (STATIC)
const quotes = [
  {
    text: "A hero is not one who never falls. He is the one who gets up, again and again, never losing sight of his dreams.",
    character: "Rock Lee",
  },
  {
    text: "Love is the reason why there is pain. When we lose someone precious to us, hate is born… to protect love.",
    character: "Gaara",
  },
  {
    text: "Those who forgive themselves, and are able to accept their true nature… They are the strong ones.",
    character: "Itachi Uchiha",
  },
  {
    text: "I’m not gonna run away, I never go back on my word! That’s my nindō: my ninja way!",
    character: "Naruto Uzumaki",
  },
];


const quoteTextEl = document.getElementById("quote-text");
const quoteCharacterEl = document.getElementById("quote-character");
const quoteCardEl = document.getElementById("quote-card");
let currentQuote = 0;

function showQuote(index) {
  const q = quotes[index];
  quoteTextEl.textContent = `${q.text}`;
  quoteCharacterEl.textContent = `— ${q.character}`;
  gsap.fromTo(
    quoteCardEl,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );
}
showQuote(currentQuote);
setInterval(() => {
  gsap.to(quoteCardEl, {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power2.in",
    onComplete: () => {
      currentQuote = (currentQuote + 1) % quotes.length;
      showQuote(currentQuote);
    },
  });
}, 4000);
handleCardContainer();

// Add search functionality for characters
const searchInput = document.querySelector('input[type="search"]');
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const cards = Cardcontainer.querySelectorAll(".card");
  cards.forEach((card) => {
    const name = card.querySelector(".card-title").textContent.toLowerCase();
    if (name.includes(value)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// Function for simple list items (strings)
const showSimpleItem = (container, data, type) => {
  data.forEach((el) => {
    container.innerHTML += `
      <div class="card bg-base-100 shadow-sm w-72 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            ${el}
            <div class="badge badge-secondary">${type}</div>
          </h2>
          <p>A ${type.toLowerCase()} from the Naruto universe.</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Naruto</div>
          </div>
        </div>
      </div>
    `;
  });
};

// Function for object items (like characters)
const showObjectItem = (container, data, type) => {
  data.forEach((el) => {
    container.innerHTML += `
      <div class="card bg-base-100 shadow-sm w-72 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <figure class="w-full h-64 overflow-hidden">
          <img src="${
            el.images ? el.images[1] || el.images[0] : "placeholder.jpg"
          }" alt="${
      el.name
    }" class="w-full h-full object-cover transition duration-500 hover:scale-110" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            ${el.name}
            <div class="badge badge-secondary">${
              el.personal ? el.personal.clan || "unknown" : type
            }</div>
          </h2>
          <p>${
            el.debut
              ? `Debut: ${el.debut.manga || "Unknown"}`
              : "Details about this ${type.toLowerCase()}."
          }</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">${type}</div>
          </div>
        </div>
      </div>
    `;
  });
};

// For Clans
const handleClanContainer = () => {
  fetch("https://dattebayo-api.onrender.com/clans")
    .then((res) => res.json())
    .then((data) =>
      showSimpleItem(
        document.getElementById("clan-container"),
        data.clans,
        "Clan"
      )
    );
};
handleClanContainer();

// For Villages
const handleVillageContainer = () => {
  fetch("https://dattebayo-api.onrender.com/villages")
    .then((res) => res.json())
    .then((data) =>
      showSimpleItem(
        document.getElementById("village-container"),
        data.villages,
        "Village"
      )
    );
};
handleVillageContainer();

// For Kekkei Genkai
const handleKekkeiGenkaiContainer = () => {
  fetch("https://dattebayo-api.onrender.com/kekkei-genkai")
    .then((res) => res.json())
    .then((data) =>
      showSimpleItem(
        document.getElementById("kekkei-genkai-container"),
        data.kekkeiGenkai,
        "Kekkei Genkai"
      )
    );
};
handleKekkeiGenkaiContainer();

// For Jutsu (assuming endpoint exists)
const handleJutsuContainer = () => {
  fetch("https://dattebayo-api.onrender.com/jutsu")
    .then((res) => res.json())
    .then((data) =>
      showObjectItem(
        document.getElementById("jutsu-container"),
        data.jutsu,
        "Jutsu"
      )
    );
};
handleJutsuContainer();

// For Tailed Beasts
const handleTailedBeastsContainer = () => {
  fetch("https://dattebayo-api.onrender.com/tailed-beasts")
    .then((res) => res.json())
    .then((data) =>
      showObjectItem(
        document.getElementById("tailed-beasts-container"),
        data.tailedBeasts,
        "Tailed Beast"
      )
    );
};
handleTailedBeastsContainer();

// For Teams
const handleTeamContainer = () => {
  fetch("https://dattebayo-api.onrender.com/teams")
    .then((res) => res.json())
    .then((data) =>
      showSimpleItem(
        document.getElementById("team-container"),
        data.teams,
        "Team"
      )
    );
};
handleTeamContainer();

// For Akatsuki
const handleAkatsukiContainer = () => {
  fetch("https://dattebayo-api.onrender.com/akatsuki")
    .then((res) => res.json())
    .then((data) =>
      showObjectItem(
        document.getElementById("akatsuki-container"),
        data.akatsuki,
        "Akatsuki Member"
      )
    );
};
handleAkatsukiContainer();

// For Kara
const handleKaraContainer = () => {
  fetch("https://dattebayo-api.onrender.com/kara")
    .then((res) => res.json())
    .then((data) =>
      showObjectItem(
        document.getElementById("kara-container"),
        data.kara,
        "Kara Member"
      )
    );
};

handleKaraContainer();
