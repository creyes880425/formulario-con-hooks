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
                                    type="text" onChange={ (e) => setFirstName(e.target.value) } 
                                    value={ firstName } 
                                />
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
                                    onChange={ (e) => setLastName(e.target.value) } 
                                    value={ lastName } 
                                />
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
                                    onChange={ (e) => setEmail(e.target.value) } 
                                    value={ email } 
                                />
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
                                    onChange={ (e) => setPassword(e.target.value) } 
                                    value={ password }
                                />
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
                                    onChange={ (e) => setConfirmPassword(e.target.value) } 
                                    value={ confirmPassword }
                                />
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