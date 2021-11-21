
import React from 'react'

const header = ({showBtn , showForm}) => {
    
    return (
        <div>
        
        <button style={{backgroundColor: showBtn ?'red':'green', color: 'white', borderRadius:'4px' ,marginTop:'20px', width:'200px'}}
         onClick={showForm}>{showBtn ? 'Close' : 'Add New Movies' }</button>
    
        </div>
    )
    
}

export default header
