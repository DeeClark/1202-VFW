//Activity 2
//VFW 1202
//Darius Clark

// wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){


	//getElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	//create select field element and populate with options.
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),//form tag is an array
			selectLi = $('make'),
			makeSelect = document.createElement('make');
			makeSelect.setAttribute("id","group");
		for(var i=0,j=cars.lenth; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = cars[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	//Should have asked if this is needed twice.
	function getSelectedRadio(){
		var radio = document.forms[0].mech;
		for(var i=0; i<radio.lenth; i++){
			if(radio[i].checked){
				mechValue = radio[i].value;
			}
		}
	};
	
	function getCheckboxValue(){
		if($('save').checked){
			saveValue = $('save').value;
	}else{
			saveValue = "No"
			}
		}	
	
	function storeData(){
		var id  	= Math.floor(Math.random()*10000001);
		getSelectedRadio();
		getCheckboxValue();
		
		//gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		var item  	= {};
			item.make	=["Make:", $('make').value];//this needs to be created
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
	function getData(){
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			//week 3
			var linksLi = document.createElement('li');
			
			//week 3
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+""+obj[n][1];
				makeSubli.innerHTML = optSubText;
	//week 3
				makeSubList.appendChild(linksLi);
				
			}
			makeItemLinks(localStorage.key(i),linksLi);//create links/button in local storage
			
			
		}
		
	}
	//
	function makeItemLinks(key, linksLi){
		//add edit each link
		var editLink = document.createElement('a');
	 editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Event";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		vardeleteText = "Delete Event";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	
	}
	//week 3

	function clearLocal(){
		if(localStorage.lenth === 0){
			alert("No events to delete.")
		}else{
			localStorage.clear();
			alert("Events deleted.");
			window.location.reload();
			return false;
		}
	}
	//variable defaults
		
	var  cars = ["--Vehicles--","Chevy","Ford","GM","Other"],
		saveValue = "No",
		mechValue
	;	
	makeCats();


	/*set link & submit click events
	var displayLink =$('display');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	*/
	var save = $('submit');
	save.addEventListener("click", storeData);

});