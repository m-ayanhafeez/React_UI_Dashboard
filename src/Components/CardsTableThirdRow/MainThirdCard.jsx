import RightThirdCard from "./RightThirdCard";
import TableCard from "./TableCard";
import Container from "react-bootstrap/Container"

function MainThirdCard (){
    return (
        <div className='my-4 d-flex flex-xl-row flex-md-col flex-sm-column flex-xsm-column'>
        <TableCard/>
        <RightThirdCard/>        
        </div>
    );
}

export default MainThirdCard;