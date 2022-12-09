
function CreateDropDown(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}
function loadParkStateDropDownList(){
    for (var i=0; i < locationsArray.length;++i){
        CreateDropDown(document.drop_list.stateDropDown, locationsArray[i], locationsArray[i]);
        }
    }
function loadNationalParkDropDownlist() {
        for (var j=0; j < parkTypesArray.length;++j){
            CreateDropDown(document.drop_list.parkTypeDropDown, parkTypesArray[j], parkTypesArray[j]);
      }
    
    }   
    
       // save the selected option of dropdown into a variable.
       // Loop over all the mountain data
       // if Mountainame is equal to selected option
       // Display mountain on screen
    //I WILL NEED A FUNCTION TO DISPLAY THE PARKS
    
    //Executing Functions
    loadParkStateDropDownList();
    loadNationalParkDropDownlist();
    //filterParksByState();
    //filterParksByType();
    
    
    //Presented Data
    function parksTemplate(park) {
       return  `<div class="parks">
              <h2 class="location-name"> ${park.LocationName}</h2>
              <h4 class="park-address"> ${park.Address}</h4>
             <h4 class="park-city"> ${park.City}</h4>
             <h4 class="park-state"> ${park.State}</h4> 
             <h4 class="park-type"> ${park.Location.type}</h4>       
            </div>
            `};
    
    //Filters by State
    function filterParksByState() {
        if (document.getElementById("stateDropDown").value === "All") {
            const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
            const selectedTypeFromDropdown = document.getElementById("parkTypeDropDown").value;
            if (selectedTypeFromDropdown !== "All"){
                
                //const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
                const filteredParks2 = nationalParksArray.filter(park => park.LocationName.includes(selectedTypeFromDropdown));
                document.getElementById("parks").innerHTML = filteredParks2.map(parksTemplate);
            } else {
                //const filteredParks2 = nationalParksArray.filter(park => park.LocationName.includes(''));
                document.getElementById("parks").innerHTML = nationalParksArray.map(parksTemplate);
            }
            
        } else {
            const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
            const filteredParks = nationalParksArray.filter(park => park.State === selectedMountainFromDropdown);
            //document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);
            const selectedTypeFromDropdown = document.getElementById("parkTypeDropDown").value;
            if (selectedTypeFromDropdown === "All"){
                document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);
            } else{
                const filteredParks2 = filteredParks.filter(park => park.LocationName.includes(selectedTypeFromDropdown));
                document.getElementById("parks").innerHTML = filteredParks2.map(parksTemplate);
            }

        }
        
        
    
       }
    //filters by park type
    function filterParksByType() {
        if (document.getElementById("parkTypeDropDown").value === "All"){
            const selectedTypeFromDropdown = document.getElementById("parkTypeDropDown").value;
            const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
            //const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedTypeFromDropdown));
            if (selectedMountainFromDropdown !== "All") {
                const filteredParks2 = nationalParksArray.filter(park => park.State === selectedMountainFromDropdown);
                document.getElementById("parks").innerHTML = filteredParks2.map(parksTemplate);
            } else {
              
                document.getElementById("parks").innerHTML = nationalParksArray.map(parksTemplate);
            }
        } else {
            const selectedTypeFromDropdown = document.getElementById("parkTypeDropDown").value;
            const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedTypeFromDropdown));
            const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
            if (selectedMountainFromDropdown === "All") {
                document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);
            } else {
                const filteredParks2 = filteredParks.filter(park => park.State === selectedMountainFromDropdown);
                document.getElementById("parks").innerHTML = filteredParks2.map(parksTemplate);
            }
            
        }
        
    }  
    // function filterParksByType() {
    //     const selectedTypeFromDropdown = document.getElementById("parkTypeDropDown").value;
    //     const filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedTypeFromDropdown));
    //     //document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);
    //     const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
    //     const filteredParks2 = filteredParks.filter(park => park.State === selectedMountainFromDropdown);
    //     document.getElementById("parks").innerHTML = filteredParks2.map(parksTemplate);
    // }  
