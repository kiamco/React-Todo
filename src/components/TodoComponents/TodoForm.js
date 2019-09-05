import React from 'react';
import { placeholder } from '@babel/types';

class TodoForm extends React.Component {

    constructor(){
        super();
        this.state ={
            title: '',
            description: '',
            deadline:''
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.EventTarget.value});
    }
    render() {
        <form>
            <label htmlFor="title">Title</label>
            <input type='text' name='title' placeholder='tite'>
        </form>
    }
}