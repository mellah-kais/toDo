var toDolist = []

function transformToDoList (todoelement){
	return todoelement.map(function(todo){
		return $('<div class="todo-holder"><button class="todo-done">v</button><div class="theTodo">'+ todo.message +'</div><button class="todo-deleted">x</button></div>')
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

	toDolist.push(newtoDo)
	$('#todo-value').value = '';
	createTodo()
	
}

function createTodo () {
	clearPrevious ('.todo-second-section')
	transformToDoList(toDolist).forEach(function(todo){
		$('.todo-second-section').prepend(todo)
	});
}


$('#btn').on('click',function(){
	addTodo()
	
})

  
$('.todo-deleted').on('click',function(){
	$(this).attr('display' , 'none')
})
