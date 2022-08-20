import Image from 'react-bootstrap/esm/Image';

function Owning(){
    return(
        <div className="d-flex align-items-center">
                <div class="avatar rounded">
                    <div class="avatar-content">
                    <Image src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/star.b60d7cea.svg" alt="Dixons"
                                    style={{
                                        borderRadius: '50%',
                                        textAlign: 'center',
                                        backgroundColor: '#EEEDFD',
                                        padding: '10px',
                                        marginRight: '10px'
                                    }}></Image>
                        </div>
                        </div>
                        <div>
                            <div className='fw-bolder'
                            style={{
                                fontSize: 'small',
                            }}>Owning</div>
                            <div
                            style={{
                                fontSize: 'small',
                            }}>us@cuhil.gov</div>
                            </div>
            </div>

    );
}
export default Owning;