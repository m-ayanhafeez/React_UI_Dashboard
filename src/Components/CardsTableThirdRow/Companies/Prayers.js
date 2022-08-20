import Image from 'react-bootstrap/esm/Image';

function Prayers(){
    return(
        <div className="d-flex align-items-center">
                <div class="avatar rounded">
                    <div class="avatar-content">
                    <Image src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/speaker.66f5dc8a.svg" alt="Dixons"
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
                            }}>Prayers</div>
                            <div
                            style={{
                                fontSize: 'small',
                            }}>luk@izug.io</div>
                            </div>
            </div>

    );
}
export default Prayers  ;