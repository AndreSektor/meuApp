import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../src/components/Header';
import Balance from '../../src/components/Balance';
import Movements from '../../src/components/Movements';
import Actions from '../../src/components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '10/09/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'PIX Cliente Ana Carolina',
    value: '2.500,00',
    date: '17/09/2023',
    type: 1 // receita // entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.200,00',
    date: '05/10/2023',
    type: 1 // receita // entrada
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="André Luís" />  

      <Balance saldo="9.250,90" gastos="-527,00"/>
      
      <StatusBar style="auto" />
      <Actions />

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList 
        style={styles.list} 
        data={list} 
        keyExtractor={ (item) => String(item.id)} 
        showsVerticalScrollIndicator={false} 
        renderItem={ ({ item }) => <Movements data={item} /> } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
