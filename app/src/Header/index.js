import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

function Header({nome}) {
  return (
<View style={styles.container}>
   <View style={styles.content}>
        <Text style={styles.username}>{nome}</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.bottonUser}>
            <Feather name="user" size={27} color="#FFF"/>
        </TouchableOpacity>
    </View>
</View>
);
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection : 'row',
    paddingStart: 16,
    paddinfEnd: 16,
    paddingBottom: 44,
},
content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
username: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
},
bottonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    borderRadius: 44 / 2,
    alignItems: 'center',
}
})

export default Header