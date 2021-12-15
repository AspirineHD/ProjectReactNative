//-----------------Week 6---------------------//

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

const AlertExample = () => {

    const simpleAlertHandler = ()=>{
        alert('Hello I am Simple Alert')
    }
    const twoOptionAlertHandler = ()=>{
        //Function to make two option alert
        Alert.alert(
            //title
            'Hello',
            //body
            'I am Two Options Alert. Do you want to cancel me?',
            //button
            [
                {
                    text:'Yes',
                    onPress:()=>console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress:()=>console.log('No Pressed')
                }
            ],
            {cancelable:true}
        )
    }
    const threeOptionAlertHandler = ()=>{
        Alert.alert(
            'Hello',
            'I am Two Options Alert. Do you want to cancel me?',
            [
                {
                    text:'Maybe',
                    onPress:()=>console.log('MAYBE Pressed'),
                },
                {
                    text:'Yes',
                    onPress:()=>console.log('YES Pressed')
                },
                {
                    text:'No',
                    onPress:()=>console.log('NO Pressed')
                }
                
            ],
            {cancelable:true}
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Button
                    title='Simple Alert'
                    onPress={simpleAlertHandler}
                />
                <Button
                    title='Alert with TWO Options'
                    onPress={twoOptionAlertHandler}
                />
                <Button
                    title='Alert with THREE Options'
                    onPress={threeOptionAlertHandler}
                />
            </View>
        </SafeAreaView>
    );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecfDf1',
  },
});
