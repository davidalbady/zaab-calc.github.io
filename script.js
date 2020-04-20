//Test json fetch with
//http://myjson.com/
function getGrainData(grainInput) {
    fetch('https://api.myjson.com/bins/x261w')
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (i=0; i<data.length; i++){
            if(data[i].Grain = grainInput){
                data[i].Origin = document.getElementById('lovibond').value;
            }
        }
        // Work with JSON data here
        console.log(data[i].Grain)
        console.log(data[i].Color)
        console.log(data);
    })
    .catch(err => {
        // Do something for an error here
    })
}


document.getElementById('maltName').addEventListener('change', getGrainData(document.getElementById('maltName').value));

dropDownData();
//Populate Malt Name from Json 
function dropDownData(){
    let dropdown = document.getElementById('maltName');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose Malt';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    // test url with grains
    //https://api.myjson.com/bins/x261w
    //const url = 'https://api.myjson.com/bins/wytok';
    const url = 'https://api.myjson.com/bins/x261w';

    fetch(url)  
    .then(  
        function(response) {  
        if (response.status !== 200) {  
            console.warn('Looks like there was a problem. Status Code: ' + response.status);  
            return;
        }

        // Examine the text in the response  
        response.json().then(function(data) {
            let option;
        
            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i].Grain;
                option.value = data[i];
                dropdown.add(option);
            }  
        });  
        }  
    )  
    .catch(function(err) {  
        console.error('Fetch Error -', err);  
    });

}

//change on lovibond to draw bottle color
document.getElementById("lovibond").addEventListener("change", drawBottle);
drawBottle();
function drawBottle(){
    //Canvas drawing the bottle
    const canvas = document.querySelector("canvas");
    canvas.width = 260;  //From CSS
    canvas.height = 400;  //From CSS
    //Setting width and height of bottle
    bWidth = 350;
    bHeight = 200;
    let c = canvas.getContext("2d");
    //Starting point
    c.moveTo(100, 50);
    c.lineTo(150,50);
    c.lineTo(150, 130);
    c.lineTo(180, 135);
    c.lineTo(180, 320);
    c.lineTo(70, 320);
    c.lineTo(70, 135);
    c.lineTo(100, 130);
    //c.lineTo(100, 50);
    c.closePath();
    //'Start-aligned', 0, 50
    c.textAlign= ('Start-aligned', 0, 50);
    let x = document.getElementById("lovibond").value;
    if (x == ""){
        c.fillStyle = "#FFFFFF";
    }else {
        c.fillStyle = "#" + getBeerColor(x);
    }
    c.fill();
    c.stroke();
}

//Gets beer color for canvas bottle
function getBeerColor(x){
    //Beer color scale from
    //https://en.wikipedia.org/wiki/Beer_measurement
    const beerColor = ["F8F753", "F6F513", "ECE61A", "BF923B", "BF813A", "BC6733", "8D4C32", "5D341A", "261716", "0F0B0A"]
    return beerColor[x];
}

//EBC = SRM x 1,97
//SRM = EBC x 0,508
//https://www.brewersfriend.com/homebrew/recipe/calculator

//SRM Calculations
//MCU = (grain_color * grain_weight_lbs)/volume_gallons -- Good for beer colors < 10.5 SRM

//SRM_Color = 1.4922 * [MCU ^ 0.6859] -- Good for beer colors < 50 SRM

//MCU = grainColor * grainWeightLBS / volumeGallons
//lb = kg * 2.2046
//1 liter = 0.264172052 gallons
//EBC → SRM           EBC × 0.508 = SRM
//SRM → EBC           SRM × 1.97 = EBC
//°L → SRM               (1.3546 × °L) – 0.76 = SRM
//SRM → °L               (SRM + 0.76) ÷ 1.3546 = °L
//SRM = 1.4922 * (MCU ^ 0.68590)

function calcSRM(liter, grainWeight){
    let SRM = 1.4922 * (MCU ^ 0.68590);
}

//((target ABV/131)+(Expected yeast efficiency/100))/(Expected yeast efficiency/100)
//((Expected OG-1)*((Expected yeast efficiency/100)))+1
let beerMainInfo
//document.querySelectorAll(".beer-main-info").addEventListener("change", getMainInfo);
function getMainInfo() {
    let mainInfo = document.querySelectorAll("div > beer-main-info");
    var i;
    for (i = 0; i < mainInfo.length; i++) {
        mainInfo[i].style.backgroundColor = "red";
    }
}



//###################################################################
// Templates to generate input section for malt, hops in main page //
//###################################################################
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
grains_test = [
    {
      "grain": "Pilsner Malt",
      "origin": "Germany",
      "type": "Base",
      "manufacturer": "Avangard",
      "must-mash?": "Yes",
      "color-low": 1.5,
      "color-high": 1.5,
      "color-low-srm": 1.2719,
      "color-high-srm": 1.2719,
      "extract-fg-min": 81,
      "potential": 1.0374301,
      "moisture": 4.5,
      "usage-max": 100
    },
    {
      "grain": "Vienna Malt",
      "origin": "Germany",
      "type": "Base",
      "manufacturer": "Avangard",
      "must-mash?": "Yes",
      "color-low": 2.8,
      "color-high": 2.8,
      "color-low-srm": 3.03288,
      "color-high-srm": 3.03288,
      "extract-fg-min": 82,
      "potential": 1.0378922,
      "moisture": 5.5,
      "usage-max": 90
    },
    {
      "grain": "Heidleberg",
      "origin": "Germany",
      "type": "Base",
      "manufacturer": "BestMalz",
      "must-mash?": "Yes",
      "color-low": 1.5,
      "color-high": 1.5,
      "color-low-srm": 1.2719,
      "color-high-srm": 1.2719,
      "extract-fg-min": 80.5,
      "potential": 1.03719905,
      "moisture": 4.9,
      "usage-max": 100
    },
    {
      "grain": "Melanoidin",
      "origin": "Germany",
      "type": "Base",
      "manufacturer": "BestMalz",
      "must-mash?": "Yes",
      "color-low": 23,
      "color-high": 31,
      "color-low-srm": 30.3958,
      "color-high-srm": 41.2326,
      "extract-fg-min": 75,
      "potential": 1.0346575,
      "moisture": 4.9,
      "usage-max": 50
    },
    {
      "grain": "Melanoidin Light",
      "origin": "Germany",
      "type": "Base",
      "manufacturer": "BestMalz",
      "must-mash?": "Yes",
      "color-low": 16,
      "color-high": 23,
      "color-low-srm": 20.9136,
      "color-high-srm": 30.3958,
      "extract-fg-min": 75,
      "potential": 1.0346575,
      "moisture": 4.9,
      "usage-max": 70
    },
    {
      "grain": "Organic Pilsen Malt",
      "origin": "Germany",
      "type": "Base",
      "manufacturer": "BestMalz",
      "must-mash?": "Yes",
      "color-low": 1.6,
      "color-high": 2.3,
      "color-low-srm": 1.40736,
      "color-high-srm": 2.35558,
      "extract-fg-min": 80.5,
      "potential": 1.03719905,
      "moisture": 4.9,
      "usage-max": 100
    }
]

setTimeout(function() {
//Import json and generate table

// for (let i=0; i < grains_test.length; i++){
//     console.log(grains_test[i]);
// }
let createTable = "";
createTable += "<table>";

for (x in grains_test) {
    createTable += "<tr><td>" + grains_test[x].grain + "</tr></td>";
    console.log(Object.keys(grains_test[x]));
    //console.log(Object.keys(grains_test));
    //console.log(Object.values(grains_test));
};

// for (let [key, value] of Object(grains_test)) {
//     console.log(`${key}: ${value}`);
// }

createTable += "</table>";
console.log(createTable);
document.getElementById("table-data").innerHTML = createTable;
console.log("Passed the html input");
}, 3000);
