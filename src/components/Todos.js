//create a new component called Todos renders a Bootstrap list-group UL tag.
import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

class Todos extends React.Component {
    render() {
        return <ul className="list-group">
             <Todo description="do laundry"></Todo>
             <Todo description="pet pal"></Todo>
             <Todo description="ponder existance"></Todo>
             <Todo description="take a bath"></Todo>
             <Todo description="chill out, max"></Todo>
        </ul>
    }
}

export default Todos

//In the Todos component, add 5 Todo components between the opening and closing UL tags, passing in a description="" attribute to each with a fake todo description.