    import React from 'react'
    
    const Alert = ({type, text}) => {
        return (
            // Type is either going to be success or danger
            <div className={`alert alert-${type}`}>
                {text}
            </div>
        )
    }
    
    export default Alert;
    