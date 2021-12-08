import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native'

const TextInputReview = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text>{inputValue}</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setInputValue}
                value={inputValue}
            />
        </SafeAreaView>
    )
}

export default TextInputReview

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#ffffff',
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
    },
  });
