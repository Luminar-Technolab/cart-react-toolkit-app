import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const allProducts = useSelector(state=>state.cartReducer)
  return (
    <Navbar style={{position:'fixed',top:'0px',width:'100%',zIndex:'1'}} expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder'>E Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Link to={'/cart'} className="btn btn-outline-dark text-light" >
            <i class="fa-solid fa-cart-plus me-1"></i>
            Cart
            <span className="badge bg-light text-dark ms-1 rounded-pill">{allProducts.length}</span>
        </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header