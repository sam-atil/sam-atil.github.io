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