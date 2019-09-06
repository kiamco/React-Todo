

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { useEffect } from 'react';
import Styled from 'styled-components'
// import './'


const ListItem = props => {


    const Span = Styled.span`
    font-size:1rem;
    border:1px solid black;
    border-radius: 0.2rem;
    padding: 5px;
    `

    return (
            <div className={`list-item ${props.item.completed ? 'completed' : ''}`} onClick={() => props.clickHandle(props.item.date)}>
                <h2>{props.item.title} <Span>{props.item.priority}</Span></h2>
                <p>Description: </p>
                <p>{props.item.description}</p>
                {props.item.completed && 
                    <h1 className='stamp'>COMPLETED</h1>
                }
            </div>
    )
}

export default ListItem;