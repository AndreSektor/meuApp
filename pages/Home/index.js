import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../src/components/Header'
import Balance from '../../src/components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="André Luís" />  

      <Balance />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fafafa',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
