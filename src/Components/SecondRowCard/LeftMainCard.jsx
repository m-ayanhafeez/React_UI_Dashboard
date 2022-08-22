
import Container from "react-bootstrap/esm/Container";
import LeftDownCard from "./LeftDownCard";
import LeftTopMain from "./LeftTopMain";


function LeftMainCard() {
     return (
          <>
          <div className="col-12 col-lg-12 col-md-12 d-flex flex-xl-column flex-lg-row flex-xl-column flex-md-row h-100">
               <div className="d-flex flex-xl-row flex-md-row flex-md-row ">
                  <LeftTopMain/> 
               </div>
               <div className="">
                    <LeftDownCard/>
               </div>
          </div>
          </>
     );
}

export default LeftMainCard; 
