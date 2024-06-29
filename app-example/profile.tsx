import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { Link } from 'expo-router';
import {StatusBar} from "expo-status-bar";

interface Props {}

const Profile: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Profile;
