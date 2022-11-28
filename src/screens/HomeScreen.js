// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   FlatList,
//   Image,
// } from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
// import CustomButton from '../components/CustomButton/CustomButton';

// const HomeScreen = () => {
//   const [myUserData, setMyUserData] = useState();
//   const [isLoaded, setIsLoaded] = useState(true);
//   const getUserData = async () => {
//     try {
//       const response = await fetch(
//         'https://thapatechnical.github.io/userapi/users.json',
//       );
//       const myData = await response.json();
//       setMyUserData(myData);
//       setIsLoaded(false);
//       console.log(myData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   const {logout} = useContext(AuthContext);
//   return (
//     <View style={styles.root}>
//       <Text style={styles.text}>Home Screen</Text>
//       <FlatList
//         data={myUserData}
//         renderItem={({item}) => {
//           return (
//             <View>
//               <Text style={styles.textfetch}>{item.name}</Text>
//               <Text style={styles.textfetch}>{item.email}</Text>
//               <Text style={styles.textfetch}>{item.website}</Text>
//               <Text style={styles.textfetch}>{item.mobile}</Text>
//               <Text style={styles.textfetch}>{item.description}</Text>
//               <View>
//                 <Image source={{uri: item.image}}  resizeMode='cover'/>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   root: {
//     backgroundColor: '#FDFDFF',
//     padding: 30,
//     textAlign: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 35,
//     textAlign: 'center',

//     color: '#97cf8a',
//   },
//   textfetch: {
//     fontSize: 10,
//     textAlign: 'center',

//     color: 'black',
//   },
//   // text: {
//   //   fontWeight: 'bold',
//   //   fontSize: 35,
//   //   alignItems: 'center',
//   //   paddingLeft: 80,
//   //   color: '#97cf8a',
//   // },
//   // container: {
//   //   color: '#97cf8a',
//   //   alignItems: 'center',
//   //   padding: 10,
//   //   marginTop: 10,
//   //   marginVertical: 0,
//   //   width: '60%',
//   //   borderRadius: 15,
//   //   alignItems: 'center',
//   // },
// });












import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const HomeScreen = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/random?number=10&apiKey=e042e0c751074d1c99ac2a2b6407f951',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        var data = res;
        console.log(data);
        console.log(Object.keys(data.recipes[0])); 
        setIsLoaded(false);
        setMyData(data.recipes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // render the students cards
  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> {item.title} </Text>
            
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> health score: {item.healthScore} </Text>
            <Text style={styles.myName}> Ready in minutes: {item.readyInMinutes} </Text>
            <Text style={styles.myName}> Price per serving: {item.pricePerServing} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mainHeader}>Explore New Recipes</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={myData}
        renderItem={showUserData}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: '#ebedee',
  },
  card: {
    width: 350,
    height: 370,
    backgroundColor: '#adcf8e',
    borderRadius: 10,
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#48a84a',
    paddingVertical: 10,
    fontFamily: 'JosefinSans_400Regular',
  },
  idNumber: {
    
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'JosefinSans_400Regular',
    paddingRight: 10,
  },
  bioData: {
    paddingLeft:20,
    alignItems:'center',
    textAlign:'center',
    fontSize: 20,
    color: '#fff',
    fontFamily: 'JosefinSans_400Regular',
  },
  mainHeader: {
    fontFamily: 'Ultra-Regular',
    fontWeight:'bold',
    textShadowColor: '#2e6b2f',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    fontSize: 30,
    color: '#3d8f3e',
    textAlign: 'center',
    paddingTop: 20,
  },
  imgContainer: {
    padding: 10,
    borderRadius:10
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#2e6b2f',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    
  },
  myName: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'JosefinSans_400Regular',
  },
});

export default HomeScreen;
