import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
// import BarChart from "../BarChart/BarChart";
import AreaChart from "../AreaChart/AreaChart";

function RightSecondRow() {
    return (
        <Container className="col-12 col-md-12 col-xl-6 w-100 h-100 py-1">
        <Card className=' d-flex shadow-lg mb-3 bg-white rounded h-100'>
            <Card.Body>
                <div>
            <h6 className="px-5">Orders</h6>
                <h2 className="fw-bolder mb-1 pb-3 px-5 ">2,76K</h2>
                <AreaChart/>
                </div>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default RightSecondRow;