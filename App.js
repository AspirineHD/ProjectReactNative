// import React from 'react';

// //import all use component
// import {View,Text,StyleSheet} from 'react-native';

// const App =  () => {
//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.title}>Tawan Wareeboot</Text>
//       <Text>IT</Text>
//       <Text style = {{color:'green', fontSize:18}}>Thai-Nichi Institute of Technology</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//     backgroundColor: '#6eff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   title : {
//     fontSize: 25,
//     alignContent: 'center',
//     fontWeight: 'bold',
//     color: 'red'
//   }
// });

// export default App;

// import React from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

// const  App = () => {
//   return (
//     <View style = {styles.container}>
//     <Text style = {styles.title}>React Native</Text>
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//     backgroundColor: '#6eff',
//     paddingHorizontal: 40
//     // alignItems: 'center',
//     // justifyContent: 'center'
//   },
//   title : {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#20202a',
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     backgroundColor: '#61dafb',
//     textAlign: 'center',
//     borderColor: 'black',
//     borderRadius: 6
//   }
// });
//
// export default App;

// import React from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

// const  App = () => {
//   return (
//     <View style = {{padding: 50}}>
//       <View style={{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         alignItems: 'center'
//       }}>
//         <TextInput
//           placeholder='React Course'
//           style = {{width:'80%', borderColor:'black',borderWidth:1, padding:10}}/>
//           <Button title="ADD"/>
//       </View>
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//     backgroundColor: '#6eff',
//     paddingHorizontal: 40
//     // alignItems: 'center',
//     // justifyContent: 'center'
//   },
//   title : {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#20202a',
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     backgroundColor: '#61dafb',
//     textAlign: 'center',
//     borderColor: 'black',
//     borderRadius: 6
//   }
// });

// export default App;

// import React from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

// const  Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat!!!</Text>
//   </View>
//   );
// };

// const Cafe = () =>{
//   return (
//   <View>
//     <Text>Welcome!</Text>
//     <Cat/>
//     <Cat/>
//     <Cat/>
//   </View>
//   );
// };

// export default Cafe;

// import React from 'react';
// import {Text, View} from 'react-native';

// const getFullName = (firstName, secondName, thirdName) =>{
//   return firstName + " " + secondName + " " + thirdName;
// };

// const  Cat = () => {
//   return (
//     <Text>{getFullName("Tawan", "Ninrat", "Jason")}</Text>
//   );
// };

// import React from 'react';
// import {Text, View} from 'react-native';

// const Greeting = ({name})=>{
//   // const {name} = props;
//   return (
//     <View style = {{alignItems:'center'}}>
//       <Text>Hello {name}</Text>
//     </View>
//   );
// }

// const LotsOfGreetings = ()=>{
//   return (
//     <View style= {{alignItems:'center', top:50}}>
//       <Greeting name = "Marry Christmas"/>
//       <Greeting name = "Happy New Year"/>
//       <Greeting name = "Songkran Festival"/>
//   </View>
//   );
// }

// const MyCustomTextWith = (props)=>{
//   return (
//     <View style = {{alignItems:'center'}}>
//       <Text>Your First Name is {props.fName} and Last name is {props.lName}</Text>
//     </View>
//   );
// };

// const App = ()=> {
//   return (
//     <View style= {{alignItems:'center', justifyContent:'center', flex: 1}}>
//       <MyCustomTextWith fName = "fName1" lName = "lName1"/>
//       <MyCustomTextWith fName = "fName2" lName = "lName2"/>
//     </View>
//   );
// };

// export default App;

// import React in our code
// import React from 'react';
// import {useState, useMemo} from 'react';

// // import all component we are going to use
// import {StyleSheet, SafeAreaView, Text, View, Button} from 'react-native';

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const randomNumber = Math.random();

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Button title="down" onPress={() => setNumber(number - 1)} />
//         <Text>{number}</Text>
//         <Button title="up" onPress={() => setNumber(number + 1)} />
//       </View>
//       <Text>Random Number: {randomNumber}</Text>
//     </View>
//   );
// };

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [isRandom, setRandom] = useState(false);

//   const randomWithoutMemo = Math.random();

//   const randomNumber = useMemo(() => {
//     return Math.random();
//   }, [isRandom]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Button title="down" onPress={() => setNumber(number - 1)} />
//         <Text>{number}</Text>
//         <Button title="up" onPress={() => setNumber(number + 1)} />
//       </View>
//       <Text>Without useMemo: {randomWithoutMemo}</Text>
//       <Text>useMemo: {randomNumber}</Text>
//       <Button
//         title = "Random"
//         onPress = {()=>setRandom(!isRandom)}
//       />
//     </View>
//   );
// };

// import React from 'react';
// import {
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   RefreshControl,
//   Text
// } from 'react-native';

// const wait = (timeout)=> {
//   return new Promise(resolve => setTimeout(resolve,timeout));
// }

// const App = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(()=>{
//     setRefreshing(true);
//     wait(2000).then(()=>setRefreshing(false))
//   },[])

//   return (
//     <SafeAreaView style = {styles.container}>
//       <ScrollView
//         contentContainerStyle = {styles.ScrollView}
//         RefreshControl = {
//           <RefreshControl refreshing = {refreshing} onRefresh = {onRefresh}/>
//         }
//       >
//         <Text>Pull down to use RefreshControl indicator</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     padding: 10,
//   },
//   countContainer: {
//     flexDirection: 'row',
//     margin: 30,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   countNumber: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });

// export default App;

// import React from 'react';
// import { useState } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   TextInput,
//   Text
// } from 'react-native';

// const UselessTextInput = () => {
//   const [text, onChangeText] = useState("Useless Text: ");
//   const [number, onChangeNumber] = useState(null);

//   return (
//     <SafeAreaView style = {styles.container}>
//       <TextInput
//         style = {styles.input}
//         onChangeText = {onChangeText}
//         value = {text}
//       />
//       <TextInput
//         style = {styles.input}
//         onChangeText = {onChangeNumber}
//         value = {number}
//         placeholder = "Useless Placeholder"
//         keyboardType = 'numeric'
//       />
//       <Text>{text}</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',

//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10
//   },
// });

// export default UselessTextInput;

import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const checkValueIsNumberOrNot = ()=> {
    if (isNaN(inputValue)) {
      alert("It is not a Number")
    }else{
      alert("It is a Number")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Text"
          style={styles.textInputStyle}
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
        <Button
          title = "Check Value is Number or Not"
          color = "#606070"
          onPress = {checkValueIsNumberOrNot}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
    borderColor: 'black',
  },
});

export default App;
