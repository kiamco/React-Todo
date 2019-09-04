

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const ListItem = props => {
    return(
    <div className='list-items'>
        <h4>{props.item.title}</h4>
        <p>{props.item.description}</p>
        <p>{props.item.deadline}</p>
        <p>{props.item.date}</p>
    </div>
    )
}

export default ListItem;