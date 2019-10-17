import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import Main from './src/index'

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Main/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
