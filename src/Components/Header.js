import React from 'react'
import {Navbar,Form,FormControl,Button,Nav ,Dropdown, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {CartState} from '../context/Context'
import DropdownProduct from './DropdownProduct'




function Header() {
  const {state,productDispatch} = CartState()
  return (
    <Navbar bg="dark" variant="dark">
    <Link to='/'><Navbar.Brand > Shopping Cart</Navbar.Brand></Link>
    <Nav className="mr-auto">
      <Nav.Link><Link to='/'>Home</Link> </Nav.Link>
      <Nav.Link><Link to='/cart'>Cart</Link></Nav.Link>
</Nav>
    <Dropdown style={{marginRight:'25px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <FaShoppingCart color='white' fontSize='25px' />
        <Badge style={{marginLeft:6}} variant='success'>{state.cart.length}</Badge>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {state.cart.length > 0 ? <>{state.cart.map((item,i)=>{
      return (
        <Dropdown.Item >
          <DropdownProduct product={item} key={i} />
        </Dropdown.Item>
    )})}
    <Link to='/cart'><Button style={{width:'95%',marginLeft:'5px'}} >Go to Cart</Button> </Link>
    </>
     :
      <span style={{padding:10}}>Cart is empty!!</span>
     }
  </Dropdown.Menu>
</Dropdown>

    <Form inline style={{display:"flex"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>productDispatch({type:"FILTER_BY_QUERY",payload:e.target.value})} />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  )
}

export default Header