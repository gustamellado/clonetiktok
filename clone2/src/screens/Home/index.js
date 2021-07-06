import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('../../images/TikTokHome.gif')} style={{width: '100%', height: '100%'}}>
      </ImageBackground>
    </View>
  );
}