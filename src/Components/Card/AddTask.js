import React, {Component} from 'react';
import './Card.css';

export default class AddTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            cardId: 1
        }
    }

    onSubmit(event){
        event.preventDefault();
        const taskText = this.textInput.value.trim();
        const listNumber = this.props.formNum;
        const cardId = this.state.cardId
        if (taskText && this.props.onAdd) {
          this.props.onAdd(taskText, listNumber, cardId);
        }
        this.incrementId();
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
          editing
        });
    }

    incrementId = () =>{
        this.setState({ cardId: this.state.cardId + 1 })
    }

    render() {
        if(!this.state.editing) {
            return (
            <div className="open-add-button" onClick={() => this.setEditing(true)}>
                <div className="add-task" onClick={this.alertSth}>Add a task!</div>
            </div>  
            ); 
        }
        return (
        <form className="add-task" onSubmit={(e) => this.onSubmit(e)}>
            <input type="text" className="task-input" ref={input => this.textInput = input} placeholder="Set a description for this task" />
            <div>
            <button className="button add-button">Add Task</button>
            <button className="button cancel-button" onClick={() => this.setEditing(false)}>Cancel</button>
            </div>
        </form>
        );
    }
}

