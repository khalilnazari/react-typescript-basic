import React, { useState } from "react"

/**
 * Type is useState hook is alredy done by React. 
 * However, if a different data type rather than boolean is passed, typescript will catch it.
 */
const LocalState = () => {
    const [login, setLogin] = useState(false); 

    const handleLoggin = () => {
        setLogin(true)
    }

    const handleLogout = () => {
        // setLogin(0) // this will give error.
        setLogin(false)
    }

    return (
        <div>
            <button onClick={handleLoggin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <p>You are {login ? 'login' : 'logout'}</p>
        </div>
    )
}

export default LocalState; 