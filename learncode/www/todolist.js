var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  deleteTodo: function(position) {
    this.todos.splice(position,1);
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed todos.
    
    // for (var i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed === true) {
    //     completedTodos++;
    //   }
    // }    the above can be used, but the forEach method is better off
    
    this.todos.forEach(function(todo){
      if (todo.completed===true) {
        completedTodos++} 
    })
    
//     // Case 1: If everything’s true, make everything false.
//     if (completedTodos === totalTodos) {
//       // for (var i = 0; i < totalTodos; i++) {
//       //   this.todos[i].completed = false;
//       // } Or
//       this.todos.forEach(function(todo){
//         todo.completed=false;})
      
//     // Case 2: Otherwise, make everything true.
//     } else {
//       // for (var i = 0; i < totalTodos; i++) {
//       //   this.todos[i].completed = true;
//       // } OR
//       this.todos.forEach(function(todo){
//         todo.completed=true;
//       })
//     }
    this.todos.forEach(function(todo){
      //Case 1: If everything's true, make everything false.
      if (completedTodos === totalTodos) {
        todo.completed=false;
      //Case 2: Otherwise, make everything true.
      } else {
        todo.completed=true;
      }
    })
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }  
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement('li');
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = '';

//       if (todo.completed === true) {
//         todoTextWithCompletion = '(x) ' + todo.todoText;
//       } else {
//         todoTextWithCompletion = '( ) ' + todo.todoText;
//       }
//       todoLi.id = i;
//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteButton());
//       todosUl.appendChild(todoLi);
//     }    OR
    
    //take note when using for each
    //this----refers to the view object in this case
    //forEach(callback function, this)
    todoList.todos.forEach(function(todo,position){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this)
  },
  createDeleteButton: function() {
  var deleteButton=document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';
  return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function() {
      console.log(event);  //demo purposes
      console.log(event.target.parentNode.id);   //demo purposes
     //first get the element that was clicked on
      var elementClicked = event.target;
    //check if the element is a deletebutton
      if (elementClicked.className === 'deleteButton') {
        //run handlers.deleteTodo(position)
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); //elementclicked.parentNode.id is a string hence the need for the parseInt function to change it into an integer
    
  }
}) 

  }
};

view.setUpEventListeners();