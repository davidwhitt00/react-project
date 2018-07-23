import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Members extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/members", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': "application/json"
            })
        }).then(
            (response) => response.json()
    ).then((data) => {
        this.props.setToken(data.sessionToken)
    })
    event.preventDefault()
    }

    render() {
        return (
            <div id="members">
                <h1>Login</h1>
                <h6>Member Signin</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for ="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Password</Label>
                        <Input id="li_password" type="text" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="memberSB" type="submit">Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Members;