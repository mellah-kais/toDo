var toDolist = []

function transformToDoList (todoelement){
	return todoelement.map(function(todo){
		return $('<div class="todo-holder"><div class="todo-done"><i class="fas fa-check-double"></i></div><div class="theTodo">'+ todo.message +'</div><div class="delete" onclick="deleteTodo()" ><i class="far fa-window-close"></i></div></div>')
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
});

function deleteTodo() {
		 $(this).parent().fadeOut('slow');
};

