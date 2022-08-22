import Container from "react-bootstrap/esm/Container";
import LeftMainCard from "./LeftMainCard";
import RightSecondRow from "./RightSecondRow";

function MainSecondRow() {
  return (
  
    <div className="d-flex  flex-xl-row flex-md-col flex-sm-column flex-xsm-column ">
      <div className="d-flex mt-4 col-12 col-md-12 col-xl-4 col-lg-4 col-sm-12  ">
        <LeftMainCard />
      </div>
      <div className="d-flex mt-4 col-12  col-md-12 col-lg-12 col-xl-8">
      <RightSecondRow/>

      </div>
 
    </div>


  );
}

export default MainSecondRow    