import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';


const Login = ({setAuthenticate}) => {
    const navigate = useNavigate()
    const goToProductAll =()=>{navigate('/')}

    const loginUser =(event)=>{
        event.preventDefault()
        console.log("login user function issue")
        setAuthenticate(true)
        navigate("/")
    }

  return (
    <Container>
    <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="id" placeholder="ID" />
            <Form.Text className="text-muted">
            We'll never share your ID with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit" >
            Submit
        </Button>
    </Form>
    </Container>
  )
}

export default Login