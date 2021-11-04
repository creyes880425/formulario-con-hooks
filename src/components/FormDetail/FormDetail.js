import {
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "reactstrap";

const FormDetail = ({ userForm }) => {
    
    return (
        <Col sm="6" md={{ offset: 3, size: 6 }} className="formDetail">
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">You Form Data</CardTitle>
                </CardHeader>
                <CardBody>
                        <ul>                            
                            <li><span>First Name:</span> { userForm.firstName }</li>
                            <li><span>Last Name:</span> { userForm.lastName }</li>
                            <li><span>Email:</span> { userForm.email }</li>
                            <li><span>Password:</span> { userForm.password }</li>
                            <li><span>Confirm Password:</span> { userForm.confirmPassword }</li>
                        </ul>                
                </CardBody>
            </Card>
        </Col>
    );
}

export default FormDetail;