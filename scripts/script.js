var smallSidebar = document.getElementById('large');
var bigSidebar = document.getElementById('small');

function replace(){
    if(bigSidebar.style.display != "none"){
        bigSidebar.style.display = "none";
        smallSidebar.style.display = "block";
    } else {
        smallSidebar.style.display = "none";
        bigSidebar.style.display = "flex";
    }

}

