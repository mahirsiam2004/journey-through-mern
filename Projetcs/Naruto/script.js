const Cardcontainer = document.getElementById("card-container");

handleCardContainer = () => {
  fetch("https://dattebayo-api.onrender.com/characters")
    .then((res) => res.json())
    .then((data) => showCard(data.characters));
};

showCard = (data) => {
  data.forEach((el) => {
    Cardcontainer.innerHTML += `
  <div class="card bg-base-100 shadow-sm w-72 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-xl">
    <figure class="w-full h-64 overflow-hidden">
      <img src="${el.images[1] ? el.images[1] : el.images[0]}" 
           alt="${el.name}" 
           class="w-full h-full object-cover transition duration-500 hover:scale-110" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        ${el.name}
        <div class="badge badge-secondary">${
          el.personal.clan ? el.personal.clan : "unknown"
        }</div>
      </h2>
      <p>lorem 20</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>`;
  });
};

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
  quoteTextEl.textContent = `“${q.text}”`;
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
