import React from 'react'
import { API_URL } from '../Constants/URL';
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './create.css';
const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate()
  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      email,
      checked
    })
    navigate('/read')

    alert("details add successfuly")
  }

  return (
    <div className='container-fluid create'>

      <Form className='form p-5'>
        <h1>Add the new user</h1>
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

        <Form.Field >

          <Checkbox label='Agree the Terms and conditions'
            value={checked} onChange={event => setChecked(!checked)} />
        </Form.Field><br />

        <button onClick={() => postData()}>Submit</button>

      </Form>


    </div>
  )
}

export default Create