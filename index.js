var projectGrid = '';
const projects = {"VidRecover": {"URL": "https://github.com/MDL4848/VidRecover", "Image": "images/VidRecover.png"}}

fetch('./projects.json')





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