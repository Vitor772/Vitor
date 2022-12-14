import React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


const list = [
    {
        id: 1,
        label: 'Boleto conta agua',
        value: '300,90',
        date: '17/09/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '10/09/2022',
        type: 1
 },
]

function boleto() {
  return (
    <View>
         <FlatList
    data={list}
    keyExtractor={(item) => String(item.id)}
    renderItem={ ({ item}) => <Text>{item.label}</Text> }
    />
    </View>
   
  )
}


export default boleto