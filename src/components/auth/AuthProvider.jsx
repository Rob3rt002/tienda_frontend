import React, { useContext, createContext, useState, useEffect } from "react";



// export function AuthProvider({children}: AuthProvider){

// }

const AuthContext = createContext({
    isAuthenticated: false,
});