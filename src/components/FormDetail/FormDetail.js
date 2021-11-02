import {
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "reactstrap";

const FormDetail = ({ userForm }) => {

    const firstName = userForm.firstName ;
    const lastName = userForm.lastName ;
    const email = userForm.email ;
    const password = userForm.password ;
    const confirmPassword = userForm.confirmPassword ;
    
    return (
        <Col sm="6" md={{ offset: 3, size: 6 }} className="formDetail">
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">You Form Data</CardTitle>
                </CardHeader>
                <CardBody>
                        <ul>                            
                            <li><span>First Name:</span> { firstName }</li>
                            <li><span>Last Name:</span> { lastName }</li>
                            <li><span>Email:</span> { email }</li>
                            <li><span>Password:</span> { password }</li>
                            <li><span>Confirm Password:</span> { confirmPassword }</li>
                        </ul>                
                </CardBody>
            </Card>
        </Col>
    );
}

export default FormDetail;