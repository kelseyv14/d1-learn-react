import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Completed extends React.Component {
    render () {
        return <div>
        <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button><h1>Completed Todos</h1></div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)

