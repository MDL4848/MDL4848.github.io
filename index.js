var projectGrid = '';

import projects from "./projects.json" assert { type: "json" };

for (const project in projects) {
    projectGrid += '' +
    
    '<div class="grid-item">' +
        '<div>' +
            '<a href="' + projects[project]["URL"] + '"><img class="project-img" src="' + projects[project]['Image']   + '"></img></a>' +
            '<h2 style="margin: 0px"><a href="' + projects[project]["URL"] + '">'    + project + '</a></h2>' +
            '<p style="margin: 0px">' +  projects[project]["Description"] + '</p>' +
            
            
            
        '</div>' +
    '</div>'

}

document.getElementById("projectGrid").innerHTML = projectGrid;