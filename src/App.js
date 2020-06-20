import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import { LinkedInLoginButton } from 'react-social-login-buttons';

class App extends Component {
  render() {
    return(
      <Form className="login-form">
        <h1 className="text-center">
          <span className="font-weight-bold">
            myWebsite</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password"/>
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block">Log in</Button>
          <div className="text-center pt-3">
            or continue with your social Account
          </div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <InstagramLoginButton className="mt-3 mb-3"/>
          <LinkedInLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/sign-up">Sign Up</a>
            <span className="p-2">|</span>
            <a href="/forgot-password">Forgot Password</a>
          </div>
      </Form> 
    );
  }
}

export default App;
