function Technology(){
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
                    color: '#7367f0',
                    backgroundColor: '#EEEDFD',
                    padding: '10px',
                    marginRight: '10px'
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </span>
    </div>
    <span
    style={{
        fontSize : 'small',
    }}>Technology</span>
    </div>

    );
}

export default Technology;