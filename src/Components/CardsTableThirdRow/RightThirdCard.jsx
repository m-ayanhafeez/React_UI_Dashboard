import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function RightThirdCard(){
    return (
        <Container className="col-12 col-md-6 col-lg-4 col-xl-4 col-sm-12 mt-3 h-100">
            <Card className="card-developer-meetup card h-100">
        <div className="meetup-img-wrapper rounded-top text-center" style={{
            color:'var(--bs-body-color)'
        }}>
  <Image src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/email.6f4a4684.svg" height="170">
    </Image>
  </div>
     <Card.Body className="card-body h-100">
        <div className="meetup-header d-flex align-items-center">    
        <div className="meetup-day" style={{
            borderRight: '0.5px solid black',
            marginRight: '10px',
            paddingRight: '40px',
            paddingLeft: '7px'
        }}>
    <h6 className="mb-0">THU</h6>
      <h3 className="mb-0">24</h3>
       </div>
      <div className="my-auto">
       <h4 className="mb-25 card-title">Developer Meetup</h4>
       <p className="mb-0 card-text">Meet world popular developers</p>
     </div>
     </div>
       <div className="d-flex pt-4">
     <div className="avatar rounded me-1 bg-light-primary pt-2 px-2">
       <span className="avatar-content" 
        style={{
            borderRadius: '50%',
            textAlign: 'center',
            color: '#7367f0',
            backgroundColor: '#EEEDFD',
            padding: '10px',
            marginRight: '10px'
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
         </span>
         </div>
        <div>
          <h6 className="mb-0">Sat, May 25, 2020</h6>
                                                <small>10:AM to 6:PM</small>
                                                </div>
                                                </div>
                                                <div className="d-flex mt-2 pt-3">
                                                    <div className="avatar rounded me-1 bg-light-primary py-2 px-2  ">
                                                        <span className="avatar-content"
                                                         style={{
                                                            borderRadius: '50%',
                                                            textAlign: 'center',
                                                            color: '#7367f0',
                                                            backgroundColor: '#EEEDFD',
                                                            padding: '10px',
                                                            marginRight: '10px'
                                                        }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                            </span>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-0">Central Park</h6>
                                                                <small>Manhattan,
                                                                     New york City</small>
                                                                </div>
                                                                </div>
                                                                <div className="avatar-group d-flex pt-3 px-2">
                                                                    <div class="avatar pull-up" id="Billy-Hopkins" placement="bottom">
                                                                        <Image className="rounded-circle" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/avatar-s-9.e2785e7a.jpg" alt="avatarImg" height="33" width="33">
                                                                            </Image>
                                                                            </div>
                                                                            <div class="avatar pull-up" id="Amy-Carson" placement="bottom">
                                                                                <Image className="rounded-circle" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/avatar-s-6.974f64da.jpg" alt="avatarImg" height="33" width="33">
                                                                                    </Image>
                                                                                    </div>
                                                                                    <div className='avatar pull-up' id="Brandon-Miles" placement="bottom">
                                                                                        <Image className="rounded-circle" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/avatar-s-8.e9b18971.jpg" alt="avatarImg" height="33" width="33">
                                                                                            </Image>
                                                                                            </div>       
                                                                                             <div class="avatar pull-up" id="Daisy-Weber" placement="bottom">            
                                                                                        <Image className="rounded-circle" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/avatar-s-7.ba3f6823.jpg" alt="avatarImg" height="33" width="33">
                                                                                            </Image>
                                                                                            </div>            
                                                                                    <div class="avatar pull-up" id="Jenny-Looper" placement="bottom">
            <Image className="rounded-circle" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/avatar-s-20.40d668f5.jpg" alt="avatarImg" height="33" width="33">
                </Image>
            </div>
        <div class="d-flex align-items-center ps-1">+42</div>
        </div>
        </Card.Body>
        </Card>
        </Container>
    
    );
}


export default RightThirdCard;