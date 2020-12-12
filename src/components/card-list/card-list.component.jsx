import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

// Component (functional) : CardList
// Takes in a parameter props. Parameters are the params of the tags
// Children are the inner ontent of the tag
export const CardList = (props) => {
    console.log(props);
    return (
        <div className="card-list">
        {
            props.monsters.map(monster => (
              // unique key here helps react to know which element to update and re-render
              <Card key={monster.id} monster={monster}></Card>
            ))
        }
        </div>
    );
};