import React from 'react'

class Todo extends React.Component {
    render() {
        return <li className="list-group-item">
            <div className="row">
                <div className="col-xs-6">
                    <div className="checkbox">
                        <label className={this.props.completed === 'yes' ? "done" : ''}>
                            <input type="checkbox" onChange={(e) => this.props.toggleTodoComplete(this.props.id, e.target.checked)}
                            checked={this.props.completed === 'yes' ? true : false}/>
                            {this.props.todo}
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

Todo.propTypes = {
    id: React.PropTypes.any.isRequired,
    completed: React.PropTypes.string.isRequired,
    todo: React.PropTypes.string.isRequired,
    category: React.PropTypes.string.isRequired,
    toggleComplete: React.PropTypes.func.isRequired
}

export default Todo






 
