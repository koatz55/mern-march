import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { username, email, password, confirmPassword};
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
        return (
            <div className='newUser'>
                <p>{username}</p>
                <p>{email}</p>
                <p>{confirmPassword}</p>
                <p>{password}</p>
            </div>
        );
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirmPassword: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div className='newUser'>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Password: {confirmPassword}</p>
        </div>
    </div>
    );
};
    
export default UserForm;
