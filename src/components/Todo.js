 //Todo that renders a Bootstrap list-group-item LI tag. Put {this.props.description} between the opening and closing tags.
 import React from 'react';

 class Todo extends React.Component {
    render() {
        return <div className="col-lg-6">
                <div className="input-group">
                <span className="input-group-addon">
                <input type="checkbox" aria-label="..."/>
                </span>
                <li className="list-group-item">{this.props.description}</li>
                </div>
                </div>
                
                
    }
 }

export default Todo
 //In Todo, add the Bootstrap checkbox DIV tag, INPUT tag, and LABEL inside the LI tag, much like you did on your weekend homework.