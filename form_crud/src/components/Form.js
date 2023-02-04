import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Signup_form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log('firstname', firstName);
        console.log('lastname', lastName);
        console.log('checkbox', checkbox);
    }
    return (
        <div>
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
                    <Checkbox label="I agree to the terms and Conditions" onChange={(e) =>setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type="submit">Submit</Button>
            </Form>
        </div>
    )
}