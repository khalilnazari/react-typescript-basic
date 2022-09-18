import React from 'react'; 

type containerProps = {
    style: React.CSSProperties
}

const StyleContainer = (props: containerProps) => {
    
    return (
        <div>
            <p style={props.style}>I got a red text</p>
        </div>
    ) 
}

export default StyleContainer; 