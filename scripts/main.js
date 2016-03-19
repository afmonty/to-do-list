
 var todo = document.querySelector( '#todolist' );
 //var input = document.querySelector( 'toDoform' );
 var field = document.getElementById( 'toDoI' );
 var ltoDo = {};

submitbtn.addEventListener( 'click', generateList);

  //var genList = 
  function generateList(){
  ltoDo = {};
   if(field in ltoDo){
     alert("It is in your list already");
   } else{
     ltoDo[field.value] = 1;
    console.log(ltoDo);
     }
    return ltoDo;
};


//console.log(genList());



  /*field.innerHTML += '<li>' + text + '</li>';
    console.log("anna");
  } else {
  	console.log("banana");
  }
 };*/




