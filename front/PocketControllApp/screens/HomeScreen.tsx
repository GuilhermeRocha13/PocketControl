import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

interface Despesa {
  id: number;
  nome: string;
  categoria: string;
  data: string;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  useEffect(() => {
    fetchDespesas();
  }, []);

  const fetchDespesas = async () => {
    try {
      const response = await axios.get('http://localhost:5073/api/despesas');
      setDespesas(response.data);
    } catch (error) {
      console.error('Erro ao buscar despesas:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={despesas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text>Categoria: {item.categoria}</Text>
            <Text>Data: {new Date(item.data).toLocaleDateString()}</Text>
          </View>
        )}
      />
      <Button title="Adicionar Despesa" onPress={() => navigation.navigate('AddExpense')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginBottom: 15, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
  title: { fontWeight: 'bold', fontSize: 16 },
});

export default HomeScreen;
