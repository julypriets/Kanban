import React, {Component} from 'react';
import Card from '../Card/Card';
import AddTask from '../Card/AddTask';
import '../../App.css';

export default class List extends Component{

    render(){
        const cards = this.props.cards.map((card, index) => {
            return (
                <div key={index}>
                    <Card {...card}/>
                </div>
            )
        });

        return(
            <div>
                <div className="Board">
                <h2 className={`name-header name-${this.props.id}`}>{this.props.title}</h2>
                    {cards}
                    <div className="lists">
                        <AddTask formNum={this.props.id} onAdd={this.props.onAdd}/>
                    </div>
                </div>
            </div>
        );
    }
}