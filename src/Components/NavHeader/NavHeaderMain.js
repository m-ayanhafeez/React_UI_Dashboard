import NavigationIconLeft from './NavigationIconLeft';
// import CollapsibleExample from "./CollapsibleExample";
import NavigationIconRight from "./NavigationIconRight";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect , useState } from 'react';
import useWindowDimensions from '../SideBarCanvasHeader/useWindowDimensions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import  LeftNavigationSideBar  from '../SideBarCanvasHeader/LeftNavigationSideBar';

function NavHeaderMain() {
    const {width} = useWindowDimensions();
    const [isMedium, setIsMedium] = useState(false)

    useEffect(()=>{
        
        if(width <= 800){
            setIsMedium(true)
          
        } 
        else{
            setIsMedium(false)
        }  
        console.log(isMedium); 
        console.log(setIsMedium);      
    },[width,isMedium])



    return (
        <Navbar bg="white" style={{
            paddingTop : '0%',
            width: '100%'
        }}>
            <Container fluid  className='shadow-lg mx-0 mb-3 bg-white rounded'>
                {/* <CollapsibleExample/> */}
                {
                    isMedium ? <LeftNavigationSideBar/> : <NavigationIconLeft/> 
                }
                
                <NavigationIconRight />
            </Container>
        </Navbar>

    );

}

export default NavHeaderMain;