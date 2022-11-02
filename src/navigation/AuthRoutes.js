/*import React, { useContext, useState, useEffect } from 'react'
import Navigation from './src/navigation';
import LoginNavigator from './LoginNavigator';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

function AuthRoutes() {

    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    function onAuthStateChanged(user) {
        setUser(user);
        // setisSignedIn(true);
        if (initializing) setInitializing(false);
    }

    const {isSignedIn, setisSignedIn, user,setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState( true);

    if (initializing) return null;


    return (
        <NavigationContainer independent={true}>
          {  isSignedIn ? <Navigation /> : <LoginNavigator />}
        </NavigationContainer>
    )
}

export default AuthRoutes;
*/