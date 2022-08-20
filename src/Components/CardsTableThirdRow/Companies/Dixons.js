import Image from 'react-bootstrap/esm/Image';

function Dixons(){
    return(
        <div className="d-flex align-items-center">
                <div class="avatar rounded">
                    <div class="avatar-content">
                    <Image src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/toolbox.7bc3e910.svg" alt="Dixons"
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
                            }}>Dixons</div>
                            <div
                            style={{
                                fontSize: 'small',
                            }}>meguc@ruj.io</div>
                            </div>
            </div>

    );
}
export default Dixons;