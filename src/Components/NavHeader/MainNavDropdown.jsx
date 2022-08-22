// import NavigationIconLeft from './NavigationIconLeft';
// import NavigationIconRight from "./NavigationIconRight";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropDownHeader from './NavDropDownHeader';
import { useEffect , useState } from 'react';
import useWindowDimensions from '../SideBarCanvasHeader/useWindowDimensions';
import  LeftNavigationSideBar  from '../SideBarCanvasHeader/LeftNavigationSideBar';

function MainNavDropdown() {
    const {width} = useWindowDimensions();
    const [isMedium, setIsMedium] = useState(false)

    useEffect(()=>{
        
        if(width <= 1029){
            setIsMedium(true)
            
        } 
        else{
            setIsMedium(false)
        }
        console.log(width)       
    },[width,isMedium])



    return (
        <Navbar>
        <Container fluid className='shadow-lg mx-3 mb-3 bg-white rounded' style={{
            display: isMedium ? 'none' : 'block'
        }}>
        {/* <CollapsibleExample/> */}
        {
            isMedium ? <div>Hello</div> : <NavDropDownHeader/> 
        }
        
    </Container>
    </Navbar>

    );

}

export default MainNavDropdown;