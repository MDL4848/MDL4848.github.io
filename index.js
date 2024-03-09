var projectGrid = '';
const projects = {"VidRecover": {"URL": "https://github.com/MDL4848/VidRecover", "Image": "images/VidRecover.png"}}






for (const project in projects) {

    projectGrid += '<div class="grid-item"><div><img class="project-img" src="' + projects[project]['Image']   + '"></img><h2>' + project + '</h2></div></div>'
}


document.getElementById("projectGrid").innerHTML = projectGrid;