

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
        name: "Task Manager",
        description: "It manage your tasks , Login & signup included , data save at database , Django backend",
        backgroundImage:"task_manager.png",
        href:"https://github.com/vbochliya/Task-Manager-DjangoHtmlCssJS",
    },
    {
        name: "Stocks Filtering",
        description: "Filter all stocks of Exchange bitween to points, input as price&volume diff. and range of bath",
        backgroundImage:"trading_researcher.jpg",
        href:"https://github.com/vbochliya/stock-filtering",
    },
    {
        name: "Quiz Web",
        description: "Allow use to take quiz with Multiple choice questions ,timer enabled ,show the score in the end",
        backgroundImage:"quiz.jpg",
        href:"https://github.com/vbochliya/interative_quiz",
    },
    {
        name: "Product Showpage",
        description: "A small clothing business can show there product here , it's looking like a Fashion website",
        backgroundImage:"ecommerse.jpg",
        href:"https://github.com/vbochliya/Nikunj-trading",
    },
    {
        name: "My Khata",
        description: "We can manage our daily life expences by making entry here, expanses can be filtered on the basis of date, ,data stored a database",
        backgroundImage:"khata.jpg",
        href:"https://github.com/vbochliya/my-khata",
    },
    {
        name: "Student CRM",
        description: "Students can see there result and rank in exam here ",
        backgroundImage:"student_crm.jpg",
        href:"https://github.com/vbochliya/",
    },
];
//function for creating project's div with js with fiven list of data of projecs
function createProjectElements() {

    const container = document.getElementById("projects");

    project_cards_data.forEach(data => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectName = document.createElement('h3');
        projectName.textContent = data.name;
        projectDiv.appendChild(projectName);

        const projectDescription = document.createElement('span');
        projectDescription.textContent = data.description;
        projectDiv.appendChild(projectDescription);

        // const projectButton = document.createElement('button');
        // projectButton.href = data.href;
        // projectButton.target = 'blank';
        // projectButton.textContent = 'See More->';
        // projectDiv.appendChild(projectButton);

        const projectImg = document.createElement('img');
        projectImg.src = data.backgroundImage;
        projectImg.classList.add('project-background');
        projectDiv.appendChild(projectImg);
        

        container.appendChild(projectDiv);
    });

}

createProjectElements();