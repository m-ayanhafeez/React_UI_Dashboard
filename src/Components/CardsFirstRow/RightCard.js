
import Card from "react-bootstrap/Card";
import Row  from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";

function RightCard() {
   return(
    <Container className='h-100 col-12 col-md-6 col-xl-8 col-xs-12 '>
    <Card className='h-100 shadow-lg mx-0 bg-white rounded'>
    <div className="card-header"
        style={{
            display:'flex',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            border: 'none',
            padding : '30px',
            height: '100%'
        }}>
    <Card.Title className='card-title'>Statistics</Card.Title>
    <div className='card-text font-small-2 me-25 mb-0 card-text'>Updated 1 month ago</div>
    </div>
    <Card.Body className="statistics-body card-body">
    <Row className="row"
       style={{
        paddingBottom : '20px'
    }}>
    <Container className="mb-2 mb-xl-0 col-sm-6 col-xl-3">
        <div className="d-flex align-items-center">
            <div className='me-2 bg-light-primary'>
                <span className=' bg-light-primary'
                style={{
                    borderRadius: '50%',
                    textAlign: 'center',
                    color: '#7367f0',
                    backgroundColor: '#EEEDFD',
                    padding: '15px',
                    margin : '10px'
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                </span>
            </div>
        <div class="my-auto">
            <h4 class="fw-bolder mb-0">230k</h4>
            <p class="font-small-3 mb-0 card-text">Sales</p>
            </div>
            </div>
            </Container>
            <div class="mb-2 mb-xl-0 col-sm-6 col-xl-3">
                <div class="d-flex align-items-center">
                    <div class="avatar me-2 bg-light-info">
                        <span class="avatar-content"
                                      style={{
                                        borderRadius: '50%',
                                        textAlign: 'center',
                                        color: '#00cfe8',
                                        backgroundColor: '#E0F9FC',
                                        padding: '15px',
                                        margin : '10px'
                                    }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </span>
                            </div>
                            <div class="my-auto">
                                <h4 class="fw-bolder mb-0">8.549k</h4>
                                <p class="font-small-3 mb-0 card-text">Customers</p>
                                </div>
                                </div>
                                </div>
                                <div class="mb-2 mb-sm-0 col-sm-6 col-xl-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar me-2 bg-light-danger">
                                            <span class="avatar-content"
                                                                                  style={{
                                                                                    borderRadius: '50%',
                                                                                    textAlign: 'center',
                                                                                    color: '#ea5455',
                                                                                    backgroundColor: 'rgba(234,84,85,.12)',
                                                                                    padding: '15px',
                                                                                    margin : '10px'
                                                                                }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                                </span>
                                                </div>
                                                <div class="my-auto">
                                                    <h4 class="fw-bolder mb-0">1.423k</h4>
                                                    <p class="font-small-3 mb-0 card-text">Products</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    <div class="col-sm-6 col-xl-3">
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar me-2 bg-light-success">
                                                                <span class="avatar-content"
                                                                        style={{
                                                                            borderRadius: '50%',
                                                                            textAlign: 'center',
                                                                            color: '#28c76f',
                                                                            backgroundColor: '#E5F8ED',
                                                                            padding: '15px',
                                                                            margin : '10px'
                                                                        }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                                                    </span>
                                                                    </div>
                                                                    <div class="my-auto">
                                                                        <h4 class="fw-bolder mb-0">$9745</h4>
                                                                        <p class="font-small-3 mb-0 card-text">Revenue</p>
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                        </Row>
                                                                        </Card.Body>
                                                                        </Card>
                                                                        </Container>
   )
}

export default RightCard;