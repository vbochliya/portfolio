

// it is for showing or hiding the profile and big menu section in left 
function show_hide_profile_menu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}




// function for navigating to diffrent sections of profile
function show_section(section_id){
    const sections=document.getElementsByClassName("sections_for_menu");
    for(let section of sections){
        section.style.display="none";
    }
    document.getElementById(section_id).style.display="flex";
}






const project_cards_data = [
    {
        name: "Carnots.com",
        description: "Revolutionizing education with a dynamic platform where students collaborate with top experts for assignment help. Features include real-time chat, seamless file sharing, and secure task workflows powered by Django, React, and AWS.",
        backgroundImage: "khata.jpg",
        href: "https://carnots.com",
    },
    {
        name: "Task Manager",
        description: "Effortlessly organize your daily tasks with this powerful tool. It includes user authentication for secure access, robust database integration for persistent storage, and a seamless workflow powered by Django.",
        backgroundImage: "task_manager.png",
        href: "https://github.com/vbochliya/Task-Manager-DjangoHtmlCssJS",
    },
    {
        name: "Stock Analyzer",
        description: "Take charge of your trading strategies with this advanced stock filtering tool. Analyze stocks by price, volume, and range with customizable filters, ensuring informed decisions in dynamic markets.",
        backgroundImage: "trading_researcher.jpg",
        href: "https://github.com/vbochliya/stock-filtering",
    },
    {
        name: "Quiz Master",
        description: "A fun and interactive platform for self-improvement! Enjoy timed quizzes with multiple-choice questions, a responsive timer, and detailed scoring at the end to evaluate your knowledge.",
        backgroundImage: "quiz.jpg",
        href: "https://github.com/vbochliya/interative_quiz",
    },
    {
        name: "Fashion Showcase",
        description: "Empower your small clothing business with this visually stunning platform. Perfect for showcasing your products with elegance and style, this tool makes your business stand out online.",
        backgroundImage: "ecommerse.jpg",
        href: "https://github.com/vbochliya/Nikunj-trading",
    },
    {
        name: "Student CRM",
        description: "A dedicated platform for students to access their exam results and rankings instantly. Designed for ease of use, it offers streamlined access to critical academic insights.",
        backgroundImage: "student_crm.jpg",
        href: "https://github.com/vbochliya/",
    },
];


//function for creating project's div with js with fiven list of data of projecs
function createProjectElements() {

    const container = document.getElementById("projects");

    project_cards_data.forEach(data => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.onclick = function() {
            window.open(data.href, '_blank');
        };

        const projectName = document.createElement('h3');
        projectName.textContent = data.name;
        projectDiv.appendChild(projectName);

        const projectDescription = document.createElement('span');
        projectDescription.textContent = data.description;
        projectDiv.appendChild(projectDescription);

        const projectImg = document.createElement('img');
        projectImg.src = data.backgroundImage;
        projectImg.classList.add('project-background');
        projectDiv.appendChild(projectImg);
        

        container.appendChild(projectDiv);
    });

}

createProjectElements();