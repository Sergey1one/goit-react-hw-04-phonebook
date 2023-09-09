import React, { Component , useState} from "react";
import { nanoid } from 'nanoid';
import { FormContacts, Input } from './Form.styled'
import { Formik } from 'formik';
 


export  function Form3() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    nameInputId = nanoid();

    const onHandleChange = e => {
        const { name, value } = e.currentTarget
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    }

}

class Form2 extends Component{
    state = {
        name: '',
        number:''
    }

    
    

    nameInputId = nanoid();

    onHandleChange = e => {
        const { name, value } = e.currentTarget
        this.setState({ [name]: value })
    }

     onFormSubmit = e => {
    e.preventDefault();
         this.props.onSubmit(this.state);
         this.reset();
    }
    reset = () => {
        this.setState({ name: '', number:'' })
    }
 
    render() {
        return (
            <Formik>
             <FormContacts onSubmit={this.onFormSubmit} >
            <label htmlFor={this.nameInputId}>
              Name </label>
            <Input
                        type="text"
                        id={this.nameInputId}
                name="name"
                value={this.state.name}
                onChange={this.onHandleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                />
                 <label htmlFor={this.nameInputId}>
             Number </label>
                <Input
  type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.onHandleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <button type="submit" >Add contact</button>
                </FormContacts>
                </Formik>
        )
    }
}



export default Form2
