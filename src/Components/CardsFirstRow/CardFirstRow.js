import RightCard from "./RightCard";
import LeftCard from "./LeftCard";

function CardFirstRow(){
    return(
        <div className='d-flex flex-lg-row flex-md-row flex-sm-column flex-xsm-column'>
            <LeftCard/>
            <RightCard/>
        </div>
    )
}

export default CardFirstRow;