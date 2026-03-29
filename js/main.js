//================================
//Page Template - Theme Logic
//================================

document.addEventListener("DOMContentLoaded", () =>{
    const toggleBtn = document.getElementById("theme-toggle");
    const htmlEl = document.documentElement;

    //Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        htmlEl.classList.remove("light", "dark"); //Remove previous theme
        htmlEl.classList.add(savedTheme);
        updateToggleText(savedTheme);
    }
    else {
        updateToggleText(htmlEl.classList.contains("dark") ? "dark" : "light");
    }

    //Toggle on click
    toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let current = htmlEl.classList.contains("dark") ? "dark" : "light";
        let next = current === "dark" ? "light" : "dark";

        htmlEl.classList.remove(current);
        htmlEl.classList.add(next);

        localStorage.setItem("theme", next);
        updateToggleText(next);
    });

    function updateToggleText(theme){
        toggleBtn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

});



//================================
//Projects Page - Filtering Logic
//================================

const filterButtons = document.querySelectorAll('.filter-btn')
const projects = document.querySelectorAll('.project-card')

let activeFilter = "All";

filterButtons.forEach(btn => {
    btn.addEventListener("click", ()=>{

        //Update active Button
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.type;
        applyFilters();
    });
});


function applyFilters() {
    projects.forEach(project => {
        const type = project.dataset.type;

        const matchesFilter = activeFilter === "All" || type === activeFilter;
        if(matchesFilter){
            project.style.display = "";
        }
        else {
            project.style.display = "none";
        }
    });
}