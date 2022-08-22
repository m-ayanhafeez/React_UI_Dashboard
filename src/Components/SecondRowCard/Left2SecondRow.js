import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import LineChart from "../LineChart/LineChart";
// import BarChart from "../BarChart/BarChart";

function Left2SecondRow() {
    return (
        <Container className="col-12 col-xl-6 col-md-6">
        <Card className='shadow-lg mb-3 bg-white rounded d-flex align-items-center'>
            <Card.Body>
                <h6 className="px-5">Orders</h6>
                <h2 className="fw-bolder mb-1 pb-2 px-5">2,76K</h2>
                <LineChart></LineChart>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default Left2SecondRow;