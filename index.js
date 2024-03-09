var projectGrid = '';
const projects = {"VidRecover": {"URL": "https://github.com/MDL4848/VidRecover"}}






for (const project in projects) {

    projectGrid += '<div class="grid-item">' + project + '</div>'
}


document.getElementById("projectGrid").innerHTML = projectGrid;