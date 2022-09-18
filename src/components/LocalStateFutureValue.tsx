import React, { useEffect, useState } from "react"

// Type for user details
type userProps = {
    name: string, 
    email: string
}

const LocalStateFutureValue = () => {

    /**
     * To apply above types, <> is used
     * Below implementation set the type of user to be null(initial value) or Object/string (future value)
     */
    const  [user, setUser] = useState<userProps | null>(null)
    
    /**
     * Type assertion
     * When the state is not null and will get value as soon as DOM is mounted. 
     */
    const [admin, setAdmin] = useState<userProps>({} as userProps)

    useEffect(() => {
        setAdmin({
            name: 'Jamil', 
            email: 'jamil@gmail.com'
        })
    }, [])
    
    const handleLogin = () => {
        setUser({
            name: 'khalil', 
            email: 'khalil@expample.com'
        })
    }

    const handleLogout = () => {
        setUser(null)        
    }
    
    return (
        <div>

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            {user && (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )}

            <h2>Admin</h2>
            <p>{admin.name}</p>
            <p>{admin.email}</p>
        </div>
    )
}

export default LocalStateFutureValue;