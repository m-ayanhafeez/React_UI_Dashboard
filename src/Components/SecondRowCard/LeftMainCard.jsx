
import Container from "react-bootstrap/esm/Container";
import LeftDownCard from "./LeftDownCard";
import LeftTopMain from "./LeftTopMain";


function LeftMainCard() {
     return (
          <Container className="h-100">
          <div className="d-flex flex-xl-column flex-lg-column flex-md-row h-100">
               <div className="d-flex flex-xl-row flex-md-row flex-md-row ">
                  <LeftTopMain/> 
               </div>
               <div className="">
                    <LeftDownCard/>
               </div>
          </div>
          </Container>
     );
}

export default LeftMainCard; 
