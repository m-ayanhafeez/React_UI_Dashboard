import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'


function NavigationIconRight(){
    return ( 
        <Navbar bg="white" >
            <Navbar.Brand href="#"><Image style={{display: 'inline-block',width: '1em',height: '1em' ,verticalAlign: 'middle'}}className="country-flag flag-icon" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/us.svg"></Image></Navbar.Brand>
            <Navbar.Brand href='#' style={{fontSize:'small'}}>English</Navbar.Brand>
            <Navbar.Brand style={{fontSize:'small'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></Navbar.Brand>
            <Navbar.Brand style={{fontSize:'small'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></Navbar.Brand>
            <Navbar.Brand style={{fontSize:'small'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ficon"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg><span className="badge-up badge bg-primary rounded-pill">5</span></Navbar.Brand>
            <Navbar.Brand style={{fontSize:'small'}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge-up badge bg-danger rounded-pill">5</span></Navbar.Brand> 
            <Navbar.Brand style={{fontSize:'small'}}><div class="d-flex flex-column mb-2"><span class="user-name fw-bold">johndoe</span><span class="user-status">admin</span></div></Navbar.Brand>
            <Navbar.Brand style={{fontSize:'small'}}> <div><Image src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-11.1d46cc62.jpg"style={{height:"40px;",width:"40px",borderradius:"50%;"}} className= "rounded-circle"></Image><span class="avatar-status-online"></span></div></Navbar.Brand>
        </Navbar>
       );
  }
export default NavigationIconRight;