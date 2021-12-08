import React, {useState} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView, Button} from 'react-native';

const TextInputPractice1 = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const checkTextInput = () => {
    if (!inputValue1.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!inputValue2.trim()) {
      alert('Please Enter Email');
      return;
    }
    alert("Success")
  };
  const onPressAlert = () => {
      checkTextInput();
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Name"
            underlineColorAndroid="transparent"
            onChangeText={(inputValue1)=>{setInputValue1(inputValue1)}}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
            onChangeText={(inputValue2)=>{setInputValue2(inputValue2)}}
            
          />
        </View>
        <View style={styles.container}>
          <Button onPress={onPressAlert} title="SUBMIT" color="#841584" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
