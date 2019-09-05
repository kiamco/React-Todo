

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { useState } from 'react';
import Styled from 'styled-components'



const ListItem = props => {

 

    const ListItems = Styled.div`
    border: 2px solid black
    width:200px;
    height:200px;
    margin:20px;
    padding: 10px;

`
    const Span = Styled.span`
    font-size:1rem;
    border:1px solid black;
    border-radius: 0.2rem;
    padding: 5px;
    `

    console.log(props)
    return (
            <ListItems>
                <h2>{props.item.title} <Span>{props.item.priority}</Span></h2>
                <p>Description: </p>
                <p>{props.item.description}</p>
            </ListItems>
    )
}

export default ListItem;