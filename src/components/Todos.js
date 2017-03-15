
import React from 'react';
import Layout from './Layout'
import AddTodo from './AddTodo';
import Todo from './Todo';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'



   

   


class Todos extends React.Component {
     constructor(props) {
        super(props)
         this.getTodos = this.getTodos.bind(this)
         this.addTodo = this.addTodo.bind(this)
         this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

        // this.state = {
        //     todos: []
        // }
     }

    componentWillMount() {
        this.getTodos()
    }
    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))

    }

    addTodo(description, category) {
        if (description !== '' && category !== ''){
                 fetch('/api/v1/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todo: this.state.description,
                    category: this.state.category,
                    completed: false
                })
            })
             .then(this.getTodos)
        }
    } 

   toggleTodoComplete(todoId, isComplete) {
     fetch('/api/v1/todos/' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
     .then(this.getTodos)
   }

    // Required render method, runs initially and then again after any state changes
    render() {
        // Map array of todo data to Todo components
        let todos = this.props.sharedTodos.map((todo, key) => <Todo key={key} {...todo} toggleComplete={this.toggleComplete} />)

        // Return our Layout, wrapped around AddTodo and array of Todo components
        return <Layout>
            <div className="well well-sm">
                <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
            </div>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)




