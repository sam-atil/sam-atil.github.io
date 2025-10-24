
//Highlight the current tab box
const current = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-item").forEach(link => {
    if (link.getAttribute("href") == current){
        link.classList.add("active"); //Makes the nav-item active, thus changing the color
    }
});



//Project Section
const projects = [

   

];

//Project Target container
const projectGrid = document.getElementById("project-grid");
if (projectGrid) {  // <-- Only run if the element exists
    projects.forEach(project => {
        const card = document.createElement("a");
        card.classList.add("project-card");
        card.href = project.link;
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
    });
}


//Skills Section
const skills = [
    { title: "Python" },
    { title: "Java" },
    { title: "C++" },
    { title: "JavaScript" },
    { title: "HTML"},
    { title: "CSS"},
    { title: "Unreal Engine"},
    { title: "Unity"},
    { title: "Blender"},
    { title: "Neural Networks"}
];

//Skill Target Container
const skillGrid = document.getElementById("skill-grid");
if (skillGrid) {  // <-- Only run if the element exists
    console.log("skillGrid exists!", skillGrid);

    skills.forEach(skill => {
        const skill_card = document.createElement("div");
        skill_card.classList.add("skill-card");
        skill_card.innerHTML = `<div class="skill-info"><h3>${skill.title}</h3></div>`;
        skillGrid.appendChild(skill_card);
    });
}


//Personal Section
const personal_projs = [
    {
        title: "Shattered Phases",
        image: "images/aurora.png",
        description: "A 2D turn based RPG built with Aseprite and GameMaker Studio",
        software: "Aseprite, GameMaker Studio",
        concepts: "Turn-Based RPG",
        language: "Javascript",
        link: "/projects/shattered.html"
    }
];

//Project Target container
const personalGrid = document.getElementById("personal-grid");
if (personalGrid) {  // <-- Only run if the element exists
    personal_projs.forEach(personal => {
        const card = document.createElement("a");
        card.classList.add("personal-card");
        card.href = personal.link;
        card.innerHTML = `
            <img src="${personal.image}" alt="${personal.title}" class="project-image">
            <div class="project-info">
              <h3>${personal.title}</h3>
              <p class="description">${personal.description}</p>
              <p><strong>Software:</strong> ${personal.software}</p>
              <p><strong>Concepts:</strong> ${personal.concepts}</p>
              <p><strong>Language:</strong> ${personal.language}</p>
            </div>
        `;
        personalGrid.appendChild(card);
    });
}