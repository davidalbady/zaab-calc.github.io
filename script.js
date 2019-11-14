function maltTemplate(){
    const myMaltTemplate = document.getElementById("malt-template");
    const maltNode = document.importNode(myMaltTemplate.content, true);
    const mainContent = document.getElementById("main-malt-content");
    mainContent.appendChild(maltNode);

}

function removeMalt(){
    //var maltMain = document.getElementById("main-malt-content");
    var maltContainer = document.getElementById("malt-container");
    maltContainer.parentNode.removeChild(maltContainer);

}


function hopsTemplate(){
    const myHopsTemplate = document.getElementById("hops-template");
    const hopsNode = document.importNode(myHopsTemplate.content, true);
    const mainContent = document.getElementById("main-hops-content");
    mainContent.appendChild(hopsNode);

}

function removeHops(){
    //var maltMain = document.getElementById("main-malt-content");
    var hopsContainer = document.getElementById("hops-container");
    hopsContainer.parentNode.removeChild(hopsContainer);

}