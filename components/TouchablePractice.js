import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';

const TouchablePractice = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const onPressAlert = () => {
    alert('Email: ' + inputValue1 + '\nPassword: ' + inputValue2);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={setInputValue1}
            value={inputValue1}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Password"
            underlineColorAndroid="transparent"
            onChangeText={setInputValue2}
            value={inputValue2}
          />
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.buttonIconSeparatorStyle} />
          <Button onPress={onPressAlert} title="Submit" color="blue" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});
