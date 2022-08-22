function Fashion(){
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
                    color: '#FF9F43',
                    backgroundColor: '#FFF3E8',
                    padding: '10px',
                    marginRight: '10px'
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
        </span>
    </div>
    <span
    style={{
        fontSize : 'small',
    }}>Fashion</span>
    </div>

    );
}

export default Fashion;