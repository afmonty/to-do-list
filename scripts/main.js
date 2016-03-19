

 var list = document.querySelector( '.toDoList' );
 var inputField = document.getElementById( 'toDoI' );
 var ltoDo = [];
 var newList = "";
 
submitbtn.addEventListener( 'click', generateList);

  //var genList = 
function generateList(){
   if([inputField.value] === ltoDo){
     alert("It is in your list already");
   } else{
      ltoDo.push(inputField.value);
      console.log(ltoDo);
      list.innerHTML += '<li>' + inputField.value + '</li>';
      render();
     }
    return ltoDo; 
};


function render() {
    this.[inputField.value] = "";
    this.list = "";
     //for (var i = 0; i < ltoDo.length; i++); 
//     newList.innerHTML = "<li>" + ltoDo[i] + "<li>";
};

;


  




