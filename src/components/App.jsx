
import { GlobalStyle } from "./Global Styles";
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from "./Section";
import Contacts from "./Contacts";


import { useState,useEffect } from "react";
import { Box } from "./Box";
import Filter from "./Filter";
import { FormContact } from "./Form/Form";


export function App(){
  const [contacts, setContacts] = useState(()=>{return JSON.parse(window.localStorage.getItem('contacts')) ?? []}   )
  const [filter,setFilter]=useState('')

  useEffect(() => { 
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  

  const formSubmitHandler = (  name, number ) => {
    
    
    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase())) {
      toast(`Contact with name ${name} -already in contact list`)
    }
    else if(contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase())) {
      toast(`Contact with this ${number} number  -already in contact list`)
    }
    else if (name.trim() === '' || number.trim() === '') {
      toast(`Enter name or number phone correct !!`)
    }
    else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
        toast.error('💩 Enter the correct number phone!');
    }
    else if (!/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/.test(name)) {
       toast.error('💩 Enter the correct name!');
      }
    else {
      const contact = { id:nanoid(), name, number };
    setContacts(prevContacts => [contact, ...prevContacts])
    }
  }

  const changeFilter=(e)=>{setFilter(e.currentTarget.value)}

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
   
     return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
  }

  const deleteContact = idContact => {
   setContacts(contacts.filter(({id})=>id!==idContact))
    }
  



 
  return (
   
    <Box width='400px' pl='16px'>
       
        <Section title={'Phonebook'}>
                 
        <FormContact onSubmit={formSubmitHandler}
           
        />
      </Section>
      
       <Section title="Contacts">

          <Filter value={filter} onChange={changeFilter} />
          
        <Contacts contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
          
        </Section>
        <GlobalStyle/>
<ToastContainer/>
        </Box>
  )
}





