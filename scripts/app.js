//DropDown Menu
function mountainDropDown(selectbox,text,value )
{
	var optn = document.createElement("option");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function mountainDropDownList(){
for (var i=0; i < mountainsArray.length;++i){
    mountainDropDown(document.drop_list.mountainDropDown, mountainsArray[i].name);
    }
 
}

function loadData() {
    var down = document.getElementById('mountain');
           for (let i = 0; i < mountainsArray.length; i++) {
               var optn = mountainsArray[i];
               var el = document.createElement("option");
               el.textContent = optn;
               el.value = optn;
               down.appendChild(el);
           }
           down.innerHTML = "Elements Added";
 }

mountainDropDownList();
loadData();
displayMountain();

function mountainTemplate(mountain) {
    // Mocking the data selecting a sample

     return `
       <div class="mountain">
       <img class="mountain-photo" src="images/${mountain.img}">
       <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
       <h4 class="mountain-desc">${mountain.desc} </h4>
       <p>Effort: ${mountain.effort}</p>
       <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
       </div>
       
     `};
 


function displayMountain() {
  //saves drop down menu value
    let mydropdown = document.getElementById('mountainDropDown');
    let value = mydropdown.value;
    let  selectedOption = mydropdown.options[mydropdown.selectedIndex].text;

  //filters the array to match value
    const filteredMountains = mountainsArray.filter(mountain => mountain.name === selectedOption);


   document.getElementById("mountains").innerHTML = `
     <h1 class="app-title"> Mountains to Plan for Your Next Trip</h1>
     ${filteredMountains.map(mountainTemplate).join("")}
     <p class="footer">Book your next trip now!</p>
   `;  
        
}   
   
   // save the selected option of dropdown into a variable.
   // Loop over all the mountain data
   // if Mountainame is equal to selected option
   // Display mountain on screen