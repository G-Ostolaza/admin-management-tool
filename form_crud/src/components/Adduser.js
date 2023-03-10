import React, { useState } from 'react'
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export default function SignupForm() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://63decede3d94d02c0bb0ecfd.mockapi.io/user/mock-data`,{
            firstName,
            lastName,
            checkbox
        })
        .then(()=>{
            navigate('/userinfo')
        })
    }
    return (
        <div className='main'>
            <Form className="signup">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label="Manger permissions" onChange={(e) =>setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type="submit">Submit</Button>
            </Form>
        </div>
    )
}