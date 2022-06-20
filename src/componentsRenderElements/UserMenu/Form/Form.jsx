import { useState } from 'react';
import { useCreateContactMutation, useGetContactsQuery } from '../../../Redux/contacts/contacts';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import {UserForm} from './FormStyle';

//==========================================================


function Form(){
  const [createContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.target.value;
    switch (name){
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchUser = await data.some(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });

    if(searchUser) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    try{
      await createContact({ name, number });
      toast.success(`${name} has added to contacts list`);
      console.log('success');
    } catch (error){
      toast.error('Oops, something went wrong');
    }
    setName('');
    setNumber('');
  };


  return (
    <>
      <UserForm onSubmit={handleSubmit} >
        <TextField
          sx={{mr:'25px'}}
          variant='standard'
          label='name'
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}

        />
        <TextField
          variant='standard'
          label='number'
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          onChange={handleChange}
          value={number}
        />
        <Button variant='contained' type='submit'>Add contact</Button>
      </UserForm>

    </>

  );


}

export default Form;
