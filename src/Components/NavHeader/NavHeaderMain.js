import NavigationIconLeft from './NavigationIconLeft';
import NavigationIconRight from "./NavigationIconRight";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect , useState } from 'react';
import useWindowDimensions from '../SideBarCanvasHeader/useWindowDimensions';
import  LeftNavigationSideBar  from '../SideBarCanvasHeader/LeftNavigationSideBar';

function NavHeaderMain() {
    const {width} = useWindowDimensions();
    const [isMedium, setIsMedium] = useState(false)

    useEffect(()=>{
        
        if(width <= 1029){
            setIsMedium(true)
          
        } 
        else{
            setIsMedium(false)
        }       
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