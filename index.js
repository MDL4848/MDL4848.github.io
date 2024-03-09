var projectGrid = '';

import projects from "./version.json" assert { type: "json" };









for (const project in projects) {
    projectGrid += '' +
    
    
    
    '<div class="grid-item">' +
        '<div>' +
            '<img class="project-img" src="' + projects[project]['Image']   + '"></img>' +
            '<h2 style="margin: 0px"><a href="' + projects[project]["URL"] + '">'    + project + '</a></h2>' +
        '</div>' +
    '</div>'






}


document.getElementById("projectGrid").innerHTML = projectGrid;