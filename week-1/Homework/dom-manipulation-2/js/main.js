  function myFunction() {
	var elements = document.getElementsByClassName('jumbotron'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#588fbd";
	}
    var elements = document.getElementsByClassName('btn btn-primary btn-lrg'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#ffa500";
	}
    
    var elements = document.getElementsByClassName('btn btn-secondary btn-lrg'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "black";
	}

}