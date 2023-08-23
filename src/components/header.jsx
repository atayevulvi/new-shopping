import { useState } from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon, MDBNavbarNav, MDBInputGroup } from 'mdb-react-ui-kit'
import image1 from '../assets/shopping_bags.jpg'
import { Link } from 'react-router-dom'
import { NavLink, useLocation } from 'react-router-dom';
import { CgShoppingCart, CgProductHunt } from 'react-icons/cg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
export default function App() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MDBNavbar className='sticky-top' expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Shopping</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              {/* Add your navigation links here */}
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto'>
              <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
              <MDBBtn outline>Search</MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <header className='navbar-middle p-2 p-md-2 p-lg-2'>
        <div className="container-xxl">
          <div className="row align-items-center m-0">
            <div className="col-md-2 d-flex ">

              <button className="navbar-toggler d-md-none " type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon">{showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

              <Link to='/'>
                <img src={image1} alt="logo" className='logo' />
              </Link>
            </div>

            <div className="col-md-10 row col-lg-10">
              <div className="col-md-6 m-auto">
                <div className='menu-links mt-2 d-none d-md-flex d-lg-flex'>
                  <div className='ms-auto gap-3'><NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'} onClick={toggleMenu}>HOME</NavLink></div>
                  <div className='ms-auto gap-3'><NavLink to="/shop" className={location.pathname === '/shop' ? 'active' : 'not-active'} onClick={toggleMenu}>SHOP</NavLink></div>
                  <div className='ms-auto gap-3'><NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : 'not-active'} onClick={toggleMenu}>BLOG</NavLink></div>
                  <div className='ms-auto gap-3'><NavLink to="/about" className={location.pathname === '/about' ? 'active' : 'not-active'} onClick={toggleMenu}>ABOUT</NavLink></div>
                  <div className='ms-auto gap-3'><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : 'not-active'} onClick={toggleMenu}>CONTACT</NavLink></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div className={location.pathname === '/' ? 'active' : 'not-active'}>
                      <Link onClick={toggleMenu}
                        to=""
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <CgProductHunt className='me-1 fs-2' />
                      </Link>
                    </div>
                    <div className={location.pathname === 'login' ? 'active' : 'not-active'}>
                      <Link onClick={toggleMenu}
                        to="/login"
                        className="d-flex align-items-center color-nav me-3"
                      >

                      </Link>
                    </div>
                    <div className={location.pathname === 'cart' ? 'active' : 'not-active'}>
                      <Link onClick={toggleMenu}
                        to="/cart"
                        className="d-flex align-items-center color-nav me-3 cart-span-one"
                      >
                        <div className='shopping-cart d-flex' onClick={() => navigate('/cart')}>
                          <CgShoppingCart className='me-1 fs-1' id='cartIcon' />
                          <p className='quantity'>{getTotalQuantity() || 0}</p>
                        </div>
                        <div >

                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Find products ..." aria-label="Find products ..." aria-describedby="basic-addon2" />
                  <button className="input-group-text" id="basic-addon2">search</button>
                </div>
                <div className='menu-links mt-2'>
                  <div className='mb-2'><NavLink className={location.pathname === '/' ? 'active' : 'not-active'} to="/" onClick={toggleMenu}>HOME</NavLink></div>
                  <div className='mb-2'><NavLink className={location.pathname === '/shop' ? 'active' : 'not-active'} to="/shop" onClick={toggleMenu}>SHOP</NavLink></div>
                  <div className='mb-2'><NavLink className={location.pathname === '/blog' ? 'active' : 'not-active'} to="/blog" onClick={toggleMenu}>BLOG</NavLink></div>
                  <div className='mb-2'><NavLink className={location.pathname === '/about' ? 'active' : 'not-active'} to="/about" onClick={toggleMenu}>ABOUT</NavLink></div>
                  <div className='mb-2'><NavLink className={location.pathname === '/contact' ? 'active' : 'not-active'} to="/contact" onClick={toggleMenu}>CONTACT</NavLink></div>
                </div>
              </div>

            )}
          </div>
        </div>
      </header>

    </>
  );
}
