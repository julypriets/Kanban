import React, {Component} from 'react';
import './App.css';
import List from './Components/List/List'

export default class Board extends Component {

  constructor(props){
    super(props);
    //if there's a localStorage to be had grab it otherwise set state
    if(localStorage.getItem('lists')) {
      const rawLS = localStorage.getItem('lists');
      const parsedLS = JSON.parse(rawLS);
      this.state = { lists: parsedLS }
    } else {
      this.state = {
        lists: [
          {
            title: 'To Do',
            id: 0,
            cards: []
          },
          {
            title: 'Doing',
            id: 1,
            cards: []
          },
          {
            title: 'Done',
            id: 2,
            cards: []
          },
        ],
      }

      localStorage.setItem('lists', JSON.stringify(this.state.lists))
    }
  }

  //Add new task
  addTask(taskText, listNumber, cardId){
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);
    
    const newTask = {
      taskText,
      listNumber,
      cardId
    }

    parsedLS[listNumber].cards.push(newTask)

    //sync state and localStorage
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS))
  }

  render() {
    const lists = this.state.lists.map((list, index) => (
      <div className="lists" key={index}>
        <List {...list} 
          onAdd={(taskText, listNumber, cardId) => this.addTask(taskText, listNumber, cardId)}         />
      </div>
    ));
     
    return (
      <div>
        <h1>My Kanban App</h1>
      <div className="board">
        <div className="lists">
          {lists}
        </div>
      </div>
      </div>
    );
    }
}


