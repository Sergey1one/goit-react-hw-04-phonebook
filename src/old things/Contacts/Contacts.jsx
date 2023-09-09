import PropTypes from 'prop-types';
import { Contact, DelBtn } from './Contacts.styled';

const Contacts = ({ contacts,onDeleteContact }) => {
    return (<ul>
       { contacts.map(({id,name,number}) => (
           <Contact key={id} ><p>{name}: {number}</p>
               <DelBtn onClick={()=>onDeleteContact(id)}>Delete</DelBtn>
           </Contact>
    ))}
    </ul>)
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default Contacts