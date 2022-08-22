function Grocery(){
    return(
        <div className='d-flex align-items-center'
        style={{
            display: 'flex',
            alignItems : 'center',
            paddingTop : '8px'
        }}>
    <div className='avatar me-1 bg-light-primary'>
        <span class="avatar-content"
                style={{
                    borderRadius: '50%',
                    textAlign: 'center',
                    color: '#56D38E',
                    backgroundColor: '#E5F8ED',
                    padding: '10px',
                    marginRight: '10px'
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
        </span>
    </div>
    <span
    style={{
        fontSize : 'small',
    }}>Grocery</span>
    </div>

    );
}

export default Grocery;