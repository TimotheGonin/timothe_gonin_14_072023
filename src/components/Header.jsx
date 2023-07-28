import React from 'react'
import { useLocation } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="flex-row">
          <Navbar.Brand href="#">
            <h1 className="fs-2">HRnet</h1>
          </Navbar.Brand>
          <Nav>
            <LinkContainer to={pathname === '/' ? '/employees' : '/'}>
              <Nav.Link>
                {pathname === '/' ? 'View Current Employees' : 'Home'}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
