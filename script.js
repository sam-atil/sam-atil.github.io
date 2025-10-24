
//Highlight the current tab box
const current = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-item").forEach(link => {
    if (link.getAttribute("href") == current){
        link.classList.add("active"); //Makes the nav-item active, thus changing the color
    }
});



//Project Section
const projects = [

    {
        title: "Shattered Phases",
        image: "images/aurora.png",
        description: "A 2D turn based RPG built with Aseprite and GameMaker Studio",
        software: "Aseprite, GameMaker Studio",
        concepts: "Turn-Based RPG",
        language: "Javascript"
    }
];

//Target container
const projectGrid = document.getElementById("project-grid");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <div class="project-info">
      <h3>${project.title}</h3>
      <p class="description">${project.description}</p>
      <p><strong>Software:</strong> ${project.software}</p>
      <p><strong>Concepts:</strong> ${project.concepts}</p>
      <p><strong>Language:</strong> ${project.language}</p>
    </div>
  `;

  projectGrid.appendChild(card);

})