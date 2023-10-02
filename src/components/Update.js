import React, {useState, useEffect} from 'react'
import {Form,Checkbox} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './create.css'
const Update = () => {

  const [id,setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate()

  const updateUser = async()=>{
    await axios.put(API_URL + id,{firstName,lastName,email,checked})
    alert(`Update the details of  ${firstName}`)
    navigate('/read')
  }

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setEmail(localStorage.getItem('email'));
    setChecked(localStorage.getItem('checked'))
    
  },[])

  return (
    <div className='container-fluid create'>
      
      <Form className='form p-5'>
        <h1> update the user details</h1>
        <Form.Field className='field'>
          <label>FirstName</label>
          <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)}
            placeholder='Enter Firstname' required className='input' />
        </Form.Field><br />

        <Form.Field className='field'>
          <label>LastName</label>
          <input type="text" value={lastName} onChange={event => setLastName(event.target.value)}
            placeholder='Enter Lastname' required className='input' />
        </Form.Field><br />

        <Form.Field className='field'>
          <label>Email Address</label>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)}
            placeholder='Enter the Email Address' className='input' />
        </Form.Field><br />

        <Form.Field>

          <Checkbox label='Agree the Terms and conditions'
            value={checked} onChange={event => setChecked(!checked)} />
        </Form.Field><br />

        <button onClick={()=>updateUser()} >Update details</button>

      </Form>
    </div>
  )
}

export default Update