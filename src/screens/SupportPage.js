// import {StyleSheet, Text, View} from 'react-native';
// import React, {useContext} from 'react';
// import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
// import CustomButton from '../components/CustomButton/CustomButton';
// import CustomInput from '../components/CustomInput/CustomInput';
// import {useForm, Controller} from 'react-hook-form';

// const SupportPage = () => {
//   const {logout} = useContext(AuthContext);
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();
//   return (
//     <View style={styles.root}>
//       <CustomInput
//         name="search cuisines"
//         placeholder="Search Cuisines, Recipes, ingredients etc."
//         control={control}
//       />
//       <CustomButton text={'Search'} onPress={() => logout()}></CustomButton>
//     </View>
//   );
// };

// export default SupportPage;

// const styles = StyleSheet.create({
//   text: {
//     fontWeight: 'bold',
//     fontSize: 35,
//     textAlign: 'center',
//     color: '#97cf8a',
//   },
//   root: {
//     backgroundColor: '#FDFDFF',
//     padding: 20,
//   },
// });














import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect,useContext} from 'react';


import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm, Controller} from 'react-hook-form';



const SupportPage = () => {
  const {logout} = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [isLoaded, setIsLoaded] = useState(true);
  const [searchQuery, setsearchQuery] = useState([]);
  

  useEffect(() => {
    getSearchData();
  }, []);

  const getSearchData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&number=10&apiKey=e042e0c751074d1c99ac2a2b6407f951',
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
        setsearchQuery('pasta');
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

          
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.root}>
      <CustomInput
        name="search cuisines"
        placeholder="Search Cuisines, Recipes, ingredients etc."
        control={control}
      />
      <CustomButton text={'Search'} onPress={() => getSearchData()}></CustomButton>
      </View>
      <View style={styles.root}>
      
      <FlatList
        keyExtractor={item => item.id}
        data={searchQuery}
        renderItem={showUserData}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding:20
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

export default SupportPage;