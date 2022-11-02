import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {
  const [user, setUser] = useState(null);
  const [isSignedIn, setisSignedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isSignedIn,
        setisSignedIn,

        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            setisSignedIn(true);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth()
              .signOut()

              .then(() => {
                alert('User has Signed Out');
                console.log(user);
                setisSignedIn(false);
              });
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
