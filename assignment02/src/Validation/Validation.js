import React from 'react'

const validation=(props)=>{
    return(
    <div>
        {
            props.len<5 ?
            <p>Text Too short!!</p>:
            <p>Text Too long enough!!</p>
        }
    
    </div>
    )
}

export default validation;