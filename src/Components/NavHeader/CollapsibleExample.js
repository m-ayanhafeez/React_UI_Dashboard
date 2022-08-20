// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import NavigationIconLeft from './NavigationIconLeft';
// import LeftNavigationSideBar from '../SideBarCanvasHeader/LeftNavigationSideBar';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationIconRight from './NavigationIconRight';
// import LeftNavigationSideBar from '../SideBarCanvasHeader/LeftNavigationSideBar';

function CollapsibleExample() {
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // function canvasHandle() {

  
    //     return (
    //       <>
    //         <Button variant='light' onClick={handleShow}>
    //         <FontAwesomeIcon icon={faBars}/>
    //         </Button>
      
    //         <Offcanvas show={show} onHide={handleClose}>
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title><FontAwesomeIcon icon={faBars}/></Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //              <LeftNavigationSideBar/>
    //           </Offcanvas.Body>
    //         </Offcanvas>
    //       </>
    //     );
    //   }
  return (
    <Navbar className='px-2' expand="lg" bg="white" style={{
        padding: '0%'
    }} >
       
        <Navbar.Toggle> <FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
        <NavigationIconLeft/>
        </Navbar.Collapse>
        <NavigationIconRight/>
        
    </Navbar>
    
  );
}

export default CollapsibleExample;

