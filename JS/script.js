// function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
}
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

// Function to add a new skill
function addSkill(event) {
    event.preventDefault();
    const skillInput = document.getElementById('skill-input');
    const skillLevelInput = document.getElementById('skill-level-input');
    const skillName = skillInput.value;
    const skillLevel = skillLevelInput.value;
    if (skillName && skillLevel) {
        const skill = {
            name: skillName,
            level: skillLevel
        };
        console.log(skill);
        // Here you can add the skill to a list or send it to a server
    }
}
document.getElementById('skill-form').addEventListener('submit', addSkill);

// Function to toggle dark mode

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// function social Links open hyperlinks
document.getElementById("social-links").addEventListener("mouseover",function(){
    this.style.display = "block";
    this.addEventListener("mouseout", function() {
        this.style.display = "none";
    });
    this.addEventListener("click", function() {
        window.open(this.getAttribute("data-url"), "_blank");
    });
})