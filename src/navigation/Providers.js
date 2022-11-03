import React from 'react'
import { StyleSheet } from 'react-native';
import Routes from './Routes';
import { AuthProvider } from './AuthProvider'

function Providers() {
    return (
       <AuthProvider >
           <Routes/>
       </AuthProvider>
    )
}

export default Providers;

