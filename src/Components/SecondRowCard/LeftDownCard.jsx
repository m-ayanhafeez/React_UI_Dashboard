import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import DonutChart from "../DonutChart/DonutChart";

function LeftDownCard(){
    return(
        <Container className="col-12 col-lg-12 col-md-8 col-xl-4 w-100 h-100">
            <Card className="shadow-lg mb-3 bg-white rounded align-items-center d-flex h-100 w-100">
                <Card.Body className="col-12">
                    <div className="col-12 col-lg-12 d-flex flex-xl-column flex-lg-column flex-md-row justify-cntent-between" >
                <div class="col-6">
                    <div className="mb-1 card-title">Earnings</div>
                    <div className="font-small-2">This Month</div>
                    <h5 className="mb-1">$4055.56</h5>
                    <p className="text-muted font-small-2 card-text">
                        <span className="fw-bolder">68.2%</span>
                        <span> more earnings than last month.</span>
                    </p>
                </div>
                <div>
                    <DonutChart/>
                </div>
                </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default LeftDownCard;