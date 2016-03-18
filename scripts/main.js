

    


 //var todo = document.querySelector( '#todolist' );
 var input = document.querySelector( 'toDoform' );
 var field = document.getElementById( '#toDoI' );
 var ltoDo = {};
submitbtn.addEventListener( 'submit', generateList);

  //var genList = 
  function generateList(){
  
  //var lstuff = {};
  //var stuff = prompt("Gimme stuff");
  // if(field in ltoDo){
  //   //alert("It is in your list already");
  // } else{
  //   //toDo[input] = 1;
  //   //alert("this didn't work")
    ltoDo[field] = 1;
    console.log(ltoDo);
  //   }
  // return ltoDo;
};


//console.log(genList());



  /*field.innerHTML += '<li>' + text + '</li>';
    console.log("anna");
  } else {
  	console.log("banana");
  }
 };*/




