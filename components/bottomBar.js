import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function BottomBar({navigation,cur_user}) {
  // console.log(cur_user);
  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


    return (
      <View style={[styles.container, { marginBottom: keyboardStatus=='Keyboard Shown'?-100:0}]}>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => navigation.navigate('MyEvent',{cur_user: cur_user})}><Ionicons name="home-outline" size={30} color="#A29EB6" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddEvent',{cur_user: cur_user})}><AntDesign name="pluscircle" size={30} color="#A29EB6" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile',{cur_user: cur_user})}><Ionicons name="person-outline" size={30} color="#A29EB6" /></TouchableOpacity>
        </View>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },  
    homeicon: {
      flex: 1,
    },
    profileicon: {
      flex: 1,
    },
    plusicon: {
      flex: 1,
    },
    bottomBar: {
      shadowColor: '#EEE',
      borderTopRightRadius : 30,
      borderTopLeftRadius : 30,
      backgroundColor: '#E5EAEF',
      height: 70,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
})
