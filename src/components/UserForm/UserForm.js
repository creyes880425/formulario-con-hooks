import { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "reactstrap";

const UserFrom = ({userForm, setUserForm }) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    
    
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length > 0 && password !== e.target.value) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        if (newUser.password !== newUser.confirmPassword) {
            alert("Password conformation does not match");
        }else {
            setUserForm(newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }

    return (
        <Col sm="6" md={{ offset: 3, size: 6 }}>
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">Form</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={ createUser }>
                        <FormGroup row>
                            <Label for="firstName" sm={2}>First Name</Label>
                            <Col sm={10}>
                                <Input 
                                    id="firstName" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    type="text" onChange={ handleFirstName } 
                                    value={ firstName } 
                                />
                                { firstNameError ?<p style={{color:'red'}}>{ firstNameError }</p> : '' }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastName" sm={2}>Last Name</Label>
                            <Col sm={10}>
                                <Input 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    type="text" 
                                    onChange={ handleLastName } 
                                    value={ lastName } 
                                />
                                { lastNameError ?<p style={{color:'red'}}>{ lastNameError }</p> : '' }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    type="email" 
                                    onChange={ handleEmail } 
                                    value={ email } 
                                />
                                { emailError ?<p style={{color:'red'}}>{ emailError }</p> : '' }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input 
                                    id="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    type="password" 
                                    onChange={ handlePassword } 
                                    value={ password }
                                />
                                { passwordError ?<p style={{color:'red'}}>{ passwordError }</p> : '' }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="confirmPassword" sm={2}>Confirm Password</Label>
                            <Col sm={10}>
                                <Input 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    placeholder="Confirm Password" 
                                    type="password" 
                                    onChange={ handleConfirmPassword } 
                                    value={ confirmPassword }
                                />
                                { confirmPasswordError ?<p style={{color:'red'}}>{ confirmPasswordError }</p> : '' }
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={{ offset: 2, size: 10 }}>
                                <Button>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
}

export default UserFrom;