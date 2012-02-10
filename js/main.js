//Activity 2
//VFW 1202
//Darius Clark
//Part 2


// wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){


	//getElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	//create select field element and populate with options.
	function makeCats(){
		var formTag = documents.getElementsByTagName("form"),//form tag is an array
			selectli = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id","groups");
		for(var i=0,j=contactGroup.lenth; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	//Should have asked if this is needed twice.
	function getSelectedRadio(){
		var radio = document.forms[0].mech;
		for(var i=0; i<radios.lenth; i++){
			if(radios[i].checked){
				mechValue = radios[i].value;
			}
		}
	};
	
	function getCheckboxValue(){
		if($('fav').checked){
			saveValue = $('fav').value;
	}else{
			saveValue = "No"
			}
		}	
	
	function storeData(){
		var id  	= math.floor(math.random()*10000001);
		getSelectedRadio();
		getCheckboxValue();
		
		//gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		var item  	= {};
			item.event	=["Event:", $('groups').value];//this needs to be created
			item.auto	=["Vehicle:", $('auto').value];
			item.miles	=["Mileage:", $('miles').value];
			
			item.save	=["Save vehicle?:", saveValue];
			item.mech	=["Is this mechanical?  :", mechValue];
			/*
			item		=[" Repeat service:", $('no').value];//stuck and should have asked question. 
			item	 	=["  :", $('yea').value];
			item	    =["  :", $('nea').value];
			*/
			item.what	=["What happened?", $('what').value];
			
			//save to local storage-convert to string with Stringify
			localStorage.setItem(id, JSON.stringify(item));
			alert("Event Recorded!");
	}
	
	//variable defaults
		
	var  cars = [--"Vehicles--","Chevy","Ford","GM","Other"],
		saveValue = "No",
		mechValue
	;	
	makeCats();


	//set link & submit click events
	var displayLink =$('display');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storedata);

});