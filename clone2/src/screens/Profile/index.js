import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles'

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ImageBackground source={require('../../images/TikTokProfile.jpeg')} style={{width: '100%', height: '100%', alignItems:'center'}}>
        <Text style={{fontSize:20, marginTop:20, fontWeight: "bold"}}>Profile</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'#FFF'}}>Sign up</Text>
        </TouchableOpacity>
      </ImageBackground>
      
    </View>
  );
}
