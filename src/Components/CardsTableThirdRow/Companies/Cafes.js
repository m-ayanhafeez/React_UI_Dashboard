import Image from 'react-bootstrap/esm/Image';

function Cafes(){
    return(
        <div className="d-flex align-items-center">
                <div class="avatar rounded">
                    <div class="avatar-content">
                    <Image src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/book.141c9dd7.svg" alt="Dixons"
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
                            }}>Cafe's</div>
                            <div
                            style={{
                                fontSize: 'small',
                            }}>pudais@jife.com</div>
                            </div>
            </div>

    );
}
export default Cafes;