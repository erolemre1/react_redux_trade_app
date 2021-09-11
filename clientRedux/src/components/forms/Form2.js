import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Alertify from "alertifyjs";


export default class Form2 extends Component {
    state = { email: "", password: "", city: "", description: "" }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        Alertify.success(this.state.email + " added to db", 2)
        Alertify.success(this.state.password + " added to db", 2)
        Alertify.success(this.state.description + " added to db", 2)
        Alertify.success(this.state.city + " added to db", 2)



    }
    render() {
        return (

            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email"> Email </Label>
                        <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Enter Email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"> Password </Label>
                        <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Enter Password"></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email"> Description </Label>
                        <Input onChange={this.handleChange} type="textarea" name="description" id="description" placeholder="Enter description"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city"> City </Label>
                        <Input onChange={this.handleChange} type="select" name="city" id="city" placeholder="Enter city">
                            <option>İstanbul</option>
                            <option>Antalya</option>
                            <option>İzmir</option>
                            <option>Aydın</option>
                            <option>Muğla</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="mt-2"> Save</Button>

                </Form>
            </div>
        )
    }
}

