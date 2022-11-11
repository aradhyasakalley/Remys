import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React ,{useEffect, useState}from 'react'

const HookEffect2 = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const myData = await response.json();
      setMyUserData(myData);
      setIsLoaded(false);
      console.log(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View >
      <FlatList
      
        data={myUserData}
        renderItem = {({ item }) => {
            return (
                <View>
                   <Text>{item.name}</Text>
                   <Text>{item.email}</Text>
                   <Text>{item.mobile}</Text>
                   <Text>{item.image}</Text>
                   <Image source={item.image} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                </View>
            )
        }}
       
      />
    </View>
  )
};

export default HookEffect2;

const styles = StyleSheet.create({
    root: {
        backgroundColor:'#FDFDFF',
        padding:20,
        textAlign:'center'
      },
      text: {
        fontWeight: 'bold',
        fontSize: 35,
        textAlign:'center',
        
        color: '#97cf8a',
      },
});
