var projectGrid = '';
const projects = {"VidRecover": {"URL": "https://github.com/MDL4848/VidRecover", "Image": "/images/VidRecover.png"}}






for (const project in projects) {

    projectGrid += '<div class="grid-item"><img class="project-img" href="' + projects[project]['Image']   + '"></img><p>' + project + '</p></div>'
}


document.getElementById("projectGrid").innerHTML = projectGrid;