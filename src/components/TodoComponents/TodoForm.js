import React from 'react';
import Styled from 'styled-components';

const Form = Styled.form`
    display:flex;
    flex-flow:column wrap;
    justify-content:space-around;
    width:50%;
    `
const FormContainer = Styled.div`
    display:flex;
    flex-flow:column wrap;
    justify-content:space-around;
    align-items:center;
`

const Button = Styled.button`
    margin:20px 0px;
    background: white;
    border: 2px teal solid;
    padding: 10px;
    border-radius:0.5rem;
    color:teal
    cursor:pointer
    transition:0.5s;
    font-size:1rem;

    &:hover{
        background:teal
        color: white;
    }
`

const Input = Styled.input`
    padding:10px;
    border-radius:0.5rem;
    border: 2px solid teal;
    outline:none;
`
const Textarea = Styled.textarea`
    border-radius:0.5rem;
    border: 2px solid teal;
    min-width: 100%;
    min-height: 200px;
    outline:none;
`

const Select = Styled.select`
    padding:10px;
    border-radius:0.5rem 0.5rem 0 0;
    border: 2px solid teal;
    outline:none;
    appearance:none;
    transition:0.5s;
    color:teal;
    &:hover{
        cursor:pointer;
        font-weight:bolder;
    }
`
const Label = Styled.label`
    font-size: 1.5rem;
    color:teal;
`

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            priority: ''
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    hanleSubmit = (event) => {
        this.props.addCard(event, this.state)
    }

    onSubmit
    render() {
        return (
            <FormContainer>
            <Form onSubmit={this.hanleSubmit}>
                <Label htmlFor="title">Title</Label>
                <Input type='text' name='title' placeholder='tite' onChange={this.handleChange}/>
                <Label htmlFor="description">Description</Label>
                <Textarea type='text' name='description' placeholder='description' onChange={this.handleChange} />
                <Label htmlFor="priority">Priority</Label>
                <Select type="text" onChange={this.handleChange} name='priority'>
                    <option>Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    <option value="showstopper">Showstopper</option>
                </Select>
                <Button>Add Todo</Button>
            </Form>
            </FormContainer>
        )
    }
}

export default TodoForm;