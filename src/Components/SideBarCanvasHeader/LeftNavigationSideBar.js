import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function LeftNavigationSideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='light' onClick={handleShow}>
      <FontAwesomeIcon icon={faBars}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><FontAwesomeIcon icon={faBars}/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Button variant="light" style={{
                width : '360px',
                marginBottom : '10px'
            }}><Nav.Link href="#action1" style={{fontSize:'small', paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"stroke-linecap="round" stroke-linejoin="round" class="ficon"><path d="M4 4h16c1.1 0 2 .9 2    2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">         </path><polyline points="22,6 12,13 2,6"></polyline></svg></Nav.Link> 
            <h4>Email</h4>
            </Button>
            <Button variant="light" style={{
                width : '360px',
                marginBottom : '10px'
            }}>
            <Nav.Link href="#action2" style={{fontSize:'small', paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></Nav.Link>
            <h4>Messages</h4>
            </Button>
            <Button variant="light" style={{
                width : '360px',
                marginBottom : '10px'
            }}>
            <Nav.Link href="#" style={{fontSize:'small', paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></Nav.Link>
            <h4>Todo</h4>
            </Button>
            <Button variant="light" style={{
                width : '360px',
                marginBottom : '10px'
            }}>
            <Nav.Link href="#" style={{fontSize:'small', paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10"               x2="21" y2="10"></line></svg></Nav.Link>
            <h4>Calendar</h4>
            </Button>
            <Button variant="light" style={{
                width : '360px',
                marginBottom : '10px'
            }}>
            <Nav.Link href="#" style={{fontSize:'small', paddingBottom:'10px'}}s><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon text-warning"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></Nav.Link>
            <h4>Favourites</h4>
            </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default LeftNavigationSideBar;