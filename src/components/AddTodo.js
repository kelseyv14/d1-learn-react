//Add a new component called AddTodo with a category select tag, and a description input field (with an Add Todo button using a Bootstrap input-group). We do not use the id="" attribute in HTML any more, and you cannot use the document variable in JS either. So, at this time just get the AddTodo component showing up above the list of todos. We'll work on making it work tomorrow.

class AddTodo extends React.Component {
    render() {
        return <select className="category">  
                   <div class="input-group">
                        <input type="text" class="form-control" placeholder="Description"/>
                        <span class="input-group-btn">
                        <button class="btn btn-default" type="button">AddTodo</button>
                         </span>
                  
                     </div>
                </select>
    }
} 


export default AddTodo


//"with a category select tag, and a description input field (with an Add Todo button using a Bootstrap input-group)"

//from bootstrap--
//Textual <input>s only --Avoid using <select> elements here as they cannot be fully styled in WebKit browsers.

//tried following literally first but was confused with the wording "category select tag"...