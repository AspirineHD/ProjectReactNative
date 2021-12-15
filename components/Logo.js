import React from 'react'
import { View, Text } from 'react-native'

const Logo = () => {

    //Variable
    const title = "TNI";
    const isTitle = true;

    //Function
    const showData = ()=> <Text>Hello December</Text>

    return (
        <View>
            <Text style={{color:'blue', fontSize:20}}>Thai-Nichi</Text>
            {
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle===true //กำหนดเงื่อนไข
                ?<Text>{title}</Text> //ถ้าเงี่อนไขเป็นจริง
                :<Text>Thai-Nichi</Text> //เงื่อนไขเป็นเท็จ
            }
            { showData() }
        </View>
    )
}

export default Logo

//&& ==> (condition is true)
//condition?true:false
