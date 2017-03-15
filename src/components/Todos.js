
import React from 'react';
import Layout from './Layout'
import AddTodo from './AddTodo';
import Todo from './Todo';


   

   


class Todos extends React.Component {
     constructor(props) {
        super(props)
         this.getTodos = this.getTodos.bind(this)

        this.state = {
            todos: []
        }
     }

    componentWillMount() {
        this.getTodos()
    }
    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.setState({todos: todos}))
    }

    render() {
         let todos = this.state.todos.map((todo, key) => <Todo description={todo.todo} category={todo.category} key={key} />)
        return <Layout>
                <AddTodo getTodos={this.getTodos} />
                <ul className="list-group">
                    {todos}
                </ul>
               </Layout> 
    }
}   


export default Todos
