var toDolist = []

function extracTodo (todoelement){
	return todoelement.map(function(){
		return $('<div class="todo-holder"><button class="todo-done">v</button><div class="theTodo">'+ todoelement.message +'</div><button class="todo-deleted">x</button></div>')
	})
}

function addTodo () {
	var newtoDo = {
	message : $('#todo-value').val(),
	time_created : new Date
	}
	toDolist.push(newtoDo)
	createTodo ()
}

function clearPrevious (elem) {
	$(elem).html('');		
}

function createTodo () {
	clearPrevious ('.todo-second-section')
	extracTodo(toDolist).forEach(function(todo){
		$('.todo-second-section').prepend(todo)
	});
}

$('#btn').on('click',function(){
	addTodo()
})s
