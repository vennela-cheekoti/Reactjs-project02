import React from 'react';
import './CharComponent.css'

const CharComponent=(props)=>{
    return(
        <div className="style">
           <p onClick={props.clicked}>{props.character}</p>
        </div>
        
    )
}

export default CharComponent;