import React from 'react'

class Todo extends React.Component {

    getTodo
    render() {
        //  let todos = this.state.todos.map((todos, key) => <Todos 
        //         todos={this.state.todos}
        //         strikeThrough={this.state.isStrikeThrough}
        //         onClick={this.onChange}/>)
        return <li className="list-group-item">
            <div className="row">
                <div className="col-xs-6">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" />
                        </label>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">{this.props.category}</div>
                    </div>
                </div>
            </div>
        </li>
    }
}

export default Todo

//In Todo, add the ability to mark a task complete, or if you uncheck it, mark it incomplete. The server routes for fetch are /api/v1/todos/:todoId/complete and /api/v1/todos/:todoId/incomplete, where the :todoId is the database ID of the current todo. See next step for tips on getting that ID.
//When you're mapping the Todo components in Todos, pass through the todo.id and todo.completed properties to the Todo component. In the Todo component, render method, those properties will be in accessible within this.props.


//I tried to write it out but I was working with these two sets of abstractions and I couldn't figure out how to put it together

//I think this is the render method...
        Todo.get('/todos/:todoId/complete', function(request, response) {
        let todo = {
            id: 'todo',
            completed: 'yes'
            
        }

    Todo.get('/todos/:todoId/incomplete', function(request, response) {
        let todo = {
            id: 'todo',
            completed: 'no',
           
        }

    
function handleClickOnCheckbox(e) {
    if (e.target.type === 'checkbox') {
       toFindTheCheckedItemAndCrossOff(e.target.dataset.id, e.target.checked)
        var todoId = e.target.getAttribute('data-id')

        // Check to see if the checkbox is checked (returns true if it is, false if it isn't)
        // Your code goes here...
        var isComplete = e.target.checked
        
       
       toFindTheCheckedItemAndCrossOff(todoId, isComplete)
    }
}


  //maybe I would reword for what I think this variable is doing... 
  toFindTheCheckedItemAndCrossOff(todoId, isComplete)

  //then

  if (isComplete) {
        fetch('/api/v1/todos/' + todoId +  '/complete')
        .then(getTodos)
    }
     else {
        // Your code goes here...
        fetch('/api/v1/todos/' + todoId + '/incomplete')
        .then(getTodos)

        

               
                body: JSON.stringify({
                    todo: this.state.description,
                    category: this.state.category,
                    completed: false
                })
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    description: '',
                    category: ''
                })
               toFindTheCheckedItemAndCrossOff()
            })
        }

//the function(request, response) seems like it should follow because we are requesting that a change happen and hoping the to get a response that makes that change...the let todo here might be replaced with a 

  // {this.props.description}onChange={(e) => this.setState({isStrikeThrough:e.target.value})}>




 
