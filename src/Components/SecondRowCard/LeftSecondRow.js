import  Card  from "react-bootstrap/Card";
import BarChart from "../BarChart/BarChart";
import Container from "react-bootstrap/esm/Container";

// import Image from "react-bootstrap/Image";

function LeftSecondRow(){
    return(
        <Container className="col-12 col-xl-6 col-md-6 ">
        <Card className='shadow-lg mb-3 bg-white rounded align-items-center d-flex'>
         <Card.Body>
            <h6 className="px-5">Orders</h6>
               <h2 className="fw-bolder mb-1 pb-2 px-5">2,76K</h2>
                <div>
                <BarChart/>   
                </div>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default LeftSecondRow;