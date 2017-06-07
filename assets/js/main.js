var boton = document.getElementById("boton");
boton.onclick = function(){
	
	function name(){
		var name = document.getElementById("name").value;
		if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
  			alert("Please enter your name");
		}
	}
	name();

	function email(){
		var email = document.getElementById("email");
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  			alert("Please enter a valid email");
		}
	}
	email();

	function textarea(){
		var text = document.getElementById("textarea").value;

	  if( text == null || text.length == 0 || /^\s+$/.test(text) ) {
  			alert("Please enter your comment");
		}
	}
	textarea();
}