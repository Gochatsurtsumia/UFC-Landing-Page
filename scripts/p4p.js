document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("rankings-container");

  fetch("/data/ufc_p4p_rankings.json")
    .then((res) => res.json())
    .then((fighters) => {
      fighters.forEach((fighter) => {
        const card = document.createElement("div");
        card.classList.add("fighter-card");

        card.innerHTML = `
          <img class="fighter-photo" src="${fighter.photo}" alt="${fighter.name}" />
          <div class="fighter-info">
            <div class="rank">#${fighter.rank}</div>
            <div class="name">${fighter.name}</div>
            <div class="stats">${fighter.stats}</div>
            <div><span class="reach">Reach: ${fighter.reach}</span> | <span class="height">Height: ${fighter.height}</span></div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      container.innerHTML = `<p style="color: red; text-align: center;">Failed to load rankings.</p>`;
      console.error("Error loading rankings JSON:", err);
    });
});
