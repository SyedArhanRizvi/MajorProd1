import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    // State to store the logged-in status
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [products, setProducts] = useState();

    return (
        <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn, products, setProducts }}>
            {children}
        </UserContext.Provider>
    );
};
