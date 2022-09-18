import React from "react";


const Input = () => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value); 
    }

    return (
        <div className="input">
            <input type="text" name="" onChange={handleInputChange} />
        </div>
    )
}

export default Input; 