import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../Signup';
import LoginForm from '../Login';
import Search from '../Search'

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='text-white'>
    
      <div className=' d-flex justify-content-between navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0 text-white m-3 p-2'>  <div>
        <h1>Watch Time</h1>
      </div>
      <Navbar>
        <Container fluid>
          
         <Navbar.Brand  as={Link} to='/'>
                  <span className='text-white'>Google Books Search</span>
                </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/Search'>
              <span className='text-white'>Search For Books</span>
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                 
                  <Nav.Link as={Link} to='/saved'>
                  <span className='text-white'>See Your Books</span>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}><span className='text-white'>Logout</span></Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}><span className='text-white'>Login / Signup</span></Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
      </div>
    </div>
  );
};

export default AppNavbar;
