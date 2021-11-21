import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <Navbar className={styles.navigation} expand='lg'>
        <Container>
          <Navbar.Brand href='/'>细胞小组</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/form'>表格</Nav.Link>
              <Nav.Link href='/submission'>各区细胞小组提交资料表记录</Nav.Link>
              <Nav.Link href='/about'>资料表下载</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
