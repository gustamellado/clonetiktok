import React from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, Text, View } from 'react-native';

import { styles } from './styles'

export default function Inbox() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../images/TikTokInbox.png')} style={{width: '100%', height: '100%', alignItems:'center'}}>
        <Text style={{fontSize:20, marginTop:20, fontWeight: "bold"}}>All Activity</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'#FFF'}}>Sign up</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}