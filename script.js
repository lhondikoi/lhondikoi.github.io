let skills = document.getElementsByClassName("skill-item")
let descPara = document.getElementById("skill-desc").children[0]
let descInit = "(click a skill to see details)"
descPara.innerHTML = descInit;
let selectedSkill = null
let skilldesc = {
    Python: "Studied three courses in Python starting from fundamentals to DSA to web development",
    JavaScript : "Did a web development project with VueJS",
    Java : "Studied as part of the  course in Java of the BS degree in Data Science & Applications",
    SQL : "Studied as part of the course in DBMS of the BS degree in Data Science & Applications",
    HTML5 : "Studied and worked with HTML since school years",
    CSS3 : "Studied and worked with CSS since school years",
    Flask : "Developed two full stack kanban web applications with flask with and without APIs",
    VueJS : "Developed a frontend for kanban web application completely in VueJS",
    PostgreSQL : "Studied as part of the course in DBMS of the BS degree in Data Science & Applications",
    SQLite : "Developed two full stack web applications with SQLite as the backend",
    Numpy : "Worked with as part of the courses in the BS in Data Science and Applications",
    Matplotlib : "Worked with as part of the courses in the BS in Data Science and Applications",
    Bash : "Studied as part of the 'System Commands' course in the BS in Data Science and Applications",
    sed : "Studied as part of the 'System Commands' course in the BS in Data Science and Applications",
    awk : "Studied as part of the 'System Commands' course in the BS in Data Science and Applications",
    "SQLAlchemy ORM" : "Extensively worked with during the building of two full stack kanban web applications"
}

function showDescription(e) {
    for (let skill of skills) {
        skill.style.background="#fff"
    }
    descPara.innerHTML = descInit
    listItem = e.target;
    if (listItem != selectedSkill) {
        selectedSkill = listItem
        listItem.style.background="#bbb";
        console.log(selectedSkill.innerHTML)
        descPara.innerHTML = skilldesc[selectedSkill.innerHTML]
    } else {
        selectedSkill = null;
        descPara.innerHTML = descInit
    }
}

for (let skill of skills) {
    skill.addEventListener("click", showDescription)
}



