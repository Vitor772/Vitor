import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Balance from '../Balance';
import Header from '../Header';
import Movements from '../Movements';
import Actions from '../Actions';

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

function Home() {
  return (
    <View style={styles.container}>
        <Header nome="Vitor Santos"/>
        <Balance saldo="9.250.90" gastos="-527,00"/>
          
          <Actions/>

        <Text style={styles.title}>Ultimas movimentacoes</Text>
        <FlatList 
           style={styles.list}
           data={list}
           keyExtractor={(item) => String(item.id)}
           showsVerticalScrollIndicator={false}
           renderItem={ ({ item }) => <Movements data={item} />}
        />
    </View>
  );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
})

export default Home