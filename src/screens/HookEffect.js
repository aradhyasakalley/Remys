// // import { FlatList, StyleSheet, Text, View } from 'react-native'
// // import React ,{useEffect, useState}from 'react'

// // const HookEffect = () => {
// //     const [myUserData,setMyUserData] = useState();
// //     const [isLoaded,setIsLoaded] = useState(true);
// //     const getUserData = async () => {
// //         try {
// //             const response = await  fetch('https://thapatechnical.github.io/userapi/users.json');
// //             const myData = await response.json();
// //             setMyUserData(myData);
// //             setIsLoaded(false);
// //             console.log(myData);
// //         } catch (error) {
// //            console.log(error); 
// //         }
// //     }


// // //     useEffect(() => {
// // //       getUserData();
// // //     }, [])
    
// // //   return (
// //     <View style={styles.root}>
// //       <FlatList
// //         data={myUserData}
// //         renderItem = {({ item }) => {
// //             return (
// //                 <View>
// //                    <Text>{item.name}</Text>
// //                    <Text>{item.email}</Text>
// //                    <Text>{item.mobile}</Text>
// //                 </View>
// //             )
// //         }}
       
// //       />
// //     </View>
// //   )
// // }

// // export default HookEffect

// const styles = StyleSheet.create({
//     root: {
//       backgroundColor:'#FDFDFF',
//       padding:20,
//       textAlign:'center'
//     },
//     text: {
//       fontWeight: 'bold',
//       fontSize: 35,
//       textAlign:'center',
      
//       color: '#97cf8a',
//     },
//     // text: {
//     //   fontWeight: 'bold',
//     //   fontSize: 35,
//     //   alignItems: 'center',
//     //   paddingLeft: 80,
//     //   color: '#97cf8a',
//     // },
//     // container: {
//     //   color: '#97cf8a',
//     //   alignItems: 'center',
//     //   padding: 10,
//     //   marginTop: 10,
//     //   marginVertical: 0,
//     //   width: '60%',
//     //   borderRadius: 15,
//     //   alignItems: 'center',
//     // },
//   });