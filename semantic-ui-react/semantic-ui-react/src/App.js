import React from 'react';
import { Button, Menu, Form, Segment, Header } from 'semantic-ui-react';

const ButtonExampleButton = () => <Button className='ui button' role='button'>Btn with Semantic-UI</Button>

const NavBar = () => {
  return (
    <Menu pointing secondary>
      <Menu.Item icon='home' name='home' href='/home' />
      <Menu.Item icon='box' name='posts' href='/posts' />
      <Menu.Item icon='address book' name='contact' href='/contact' />
    </Menu>
  )
}

const ContactForm = () => {
  return (
    <div className="form">
      <Segment>
        <Header as="h2">Contact Form</Header>
      </Segment>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='First Name' />
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.TextArea label='About'
          placeholder='Tell us more about you...' />
        <Button type='submit' color="blue">Submit</Button>
      </Form>
    </div>
  )
}


function App() {
  return (
    <div className='App'>
      <NavBar />
      <h1>App</h1>
      <ButtonExampleButton />
      <ContactForm />
    </div>
  );
}



export default App;
