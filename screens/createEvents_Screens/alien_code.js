// event code寫死
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions, TextInput, TouchableOpacity, ToastAndroid, Modal } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function AlienCode({navigation,route}) {
    const {cur_user, event_code} = route.params;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      setIsCopied(true);
      showToastMessage('copied', ToastAndroid.LONG); // 顯示 Toast 訊息
    };

    const showToastMessage = (message, duration) => {
      ToastAndroid.show(message, duration);
    };

    return (
      <View style={globalStyles.container}>
        <Image
          source={require('../../assets/alien.png')}
          style={styles.img}
        />
        <Text style={globalStyles.headingText}>Event Created</Text>
        <Text style={globalStyles.instructionText}>This is your event code!</Text>
        <View style={styles.row}>
            <Text style={styles.text}>{event_code}</Text>
            <TouchableOpacity onPress={handleCopy}><Feather name="copy" size={24} color="black" /></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('MyEvent',{cur_user: cur_user})} style={styles.continueButton}>
						<Text style={styles.continueButtonText}>Continue</Text>
				</TouchableOpacity>
        <View style={styles.shareContainer}>
          <View style={styles.row_2}>
            <Text style={[globalStyles.instructionText,{marginRight: 10}]}>share to friends</Text>
            <TouchableOpacity style={{marginRight: 10}}><Entypo name="facebook" size={24} color="black"/></TouchableOpacity>
            <TouchableOpacity style={{marginRight: 10}}><Entypo name="instagram" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    marginTop: 50,
    marginBottom: 10
  },
  row: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 28,
    marginLeft: 23,
    marginRight: 10
  },
  continueButton:{
    width: 350,
		marginHorizontal: 35,
		marginVertical: 8,
		height: 45,
		backgroundColor: '#809BBF',
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
  continueButtonText: {
		fontFamily: 'SpaceGrotesk_400Regular',
		color: '#fff',
	},
  shareContainer: {
    flex: 1,
    padding: 20,
    marginRight: 145
  },
  row_2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});