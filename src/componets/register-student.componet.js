import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class RegisterStudent extends Component {

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeStudentFullname = this.onChangeStudentFullname.bind(this);
      this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
      this.onChangeStudentcontact = this.onChangeStudentcontact.bind(this);
      this.onChangeStudentEmergencyContact = this.onChangeStudentEmergencyContact.bind(this);
      this.onChangeStudentShirtsize = this.onChangeStudentShirtsize.bind(this);
      this.onChangeStudentaddress = this.onChangeStudentaddress.bind(this);
      this.onChangeStudentComment = this.onChangeStudentComment.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        fullname: '',
        email: '',
        contact: '',
        emergencycontact: '',
        shirtsize: '',
        address: '',
        comment: ''
      }
    }
  
    onChangeStudentFullname(e) {
      this.setState({fullname: e.target.value})
    }
  
    onChangeStudentEmail(e) {
      this.setState({email: e.target.value})
    }
  
    onChangeStudentcontact(e) {
      this.setState({contact: e.target.value})
    }

      onChangeStudentEmergencyContact(e) {
        this.setState({emergencycontact: e.target.value})
      }
      onChangeStudentShirtsize(e) {
        this.setState({shirtsize: e.target.value})
      }
      onChangeStudentaddress(e) {
        this.setState({address: e.target.value})
      }

      onChangeStudentComment(e) {
        this.setState({comment: e.target.value})
      }
  
      onSubmit(e) {
        e.preventDefault()
    
        const studentObject = {
          fullname: this.state.fullname,
          email: this.state.email,
          contact: this.state.contact,
          emergencycontact: this.state.emergencycontact,
          shirtsize: this.state.shirtsize,
          address: this.state.address,
          comment: this.state.comment,
        };
        axios.post('http://localhost:4000/students/register-student', studentObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', email: '', rollno: '' })
      }
    
  
  
  
    render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="fullname">
          <Form.Label>FullName</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group controlId="contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="emergencycontact">
          <Form.Label>Emergency Contact</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="shirtsize">
          <Form.Label>Shirt Size</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Register Student
        </Button>
      </Form>
    </div>);
  }
}