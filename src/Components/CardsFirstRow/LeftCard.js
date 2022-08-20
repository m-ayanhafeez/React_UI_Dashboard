import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function LeftCard(){
    return (  
        <Container className="col-12 col-md-6 col-xl-4  ">
            
    <div className= 'h-100 shadow-lg mx-0 mb-3 bg-white rounded card-congratulations-medal card'>
        
            <Card className='h-100'
            style={{
                border: 'none'
            }}>
                
                <Card.Body className='h-100 card-body d-flex justify-content-between'
                 style={{
                    border: 'none'
                }}>
                <div>
                    <h5>Congratulations 🎉 John!</h5>
                    <p className='font-small-3 card-text'>You have won gold medal</p>
                    <h3 className='mb-75 mt-2 pt-50'>
                    <a href="/"
                    style={{
                        color: '#7367F0'
                    }}>$48.9k</a>
                    </h3>
                    <Button style={{
                        backgroundColor: '#7367F0'
                    }}>View Sales</Button>    
                </div>
                <div>
                <Image className='mx-2 my-0'
                     src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/badge.2936ed83.svg"></Image>
                </div>
                </Card.Body>
            </Card>
            </div>
            </Container>
  
    ); 
}
 export default LeftCard;