var toDolist = []

function transformToDoList (todoelement){
	return todoelement.map(function(todo,i){
		return $('<div class="todo-holder" ><div class="todo-done" id="t'+ i +'" onclick="tickFinish(this.id)"><i class="fas fa-check-double"></i></div><div class="theTodo">'+ todo.message +'</div><div class="delete" id="'+i +'" onclick="deleteTodo(this.id)" ><i class="far fa-window-close"></i></div></div>')
	})
}

function clearPrevious (elem) {
	$(elem).html('');		
}


function addTodo () {
	var newtoDo = {
		user : "unknown",
		message : $('#todo-value').val(),
		}
		if($('#todo-value').val().length > 0) {
			toDolist.push(newtoDo)
			createTodo()
		}
	
		
} 	
	
function createTodo () {
	clearPrevious ('.todo-second-section')
	transformToDoList(toDolist).forEach(function(todo){
		$('.todo-second-section').prepend(todo)
	});
}


$('#btn').on('click',function(){
	addTodo()
	$('#todo-value').val("")
});


 function deleteTodo(id){

	//clearPrevious ('.todo-second-section')
	toDolist.splice(id,1)
	createTodo()
  }
function tickFinish(id){
	console.log(id)
	$("#"+id).parent().css('background-color','green')
}
$('#todo-value').keypress(function(e){
	if(e.which == 13){
		addTodo()
		$('#todo-value').val("")
	}
})