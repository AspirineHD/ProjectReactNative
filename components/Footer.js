import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const users = [
        {id:1, name:'John'},
        {id:2, name:'Marry'}
    ]

    const [count, setCount] = useState(0); //const count = 0
    const [title, setTitle] = useState('Hello') 

    //Update alway if re-render
    useEffect (()=>{
        console.log('Use Effect1')
    })

    //ทำงานแค่รอบเดียว เช่น การเรียกข้อมูลจาก backend
    useEffect (()=>{
        console.log('Use Effect2')
    },[])

    //จะทำงานเมื่อตัวแปรใน [variable] มีการเปลี่ยนแปลง
    useEffect (()=>{
        console.log('Use Effect3')
    },[title])

    return (
        <View>
            <Text style={styles.title}>Thai-Nichi Institute of Technology {count}</Text>
            {
                users.map((user, index)=>{
                    return <Text key={user.id}>{index+1}. {user.name}</Text>
                })
            }
            <Button 
                title='Click Me'
                onPress={ ()=>{
                    //setCount(5) //Update ค่า count
                    setCount(count+1)
                }}
                />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize:20,
    }
})

//map => call data from array object