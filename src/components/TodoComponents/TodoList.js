

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Styled from 'styled-components'


const ListItem = props => {

    const ListItems = Styled.div`
    border: 2px solid black
    width:auto;
`

    console.log(props)
    return (
        <ListItems>
            <h2>{props.item.title}</h2>
            <p>Description: </p>
            <p>{props.item.description}</p>
            <p>Due Date: {props.item.deadline}</p>
        </ListItems>
    )
}

export default ListItem;