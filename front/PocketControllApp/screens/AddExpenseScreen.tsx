import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'AddExpense'>;

const AddExpenseScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [data, setData] = useState('');

  const addDespesa = async () => {
    if (!nome || !categoria || !data) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      await axios.post('http://localhost:5073/api/despesas', { nome, categoria, data });
      Alert.alert('Sucesso', 'Despesa adicionada!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar despesa:', error);
      Alert.alert('Erro', 'Não foi possível adicionar a despesa.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Categoria:</Text>
      <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} />

      <Text>Data (YYYY-MM-DD):</Text>
      <TextInput style={styles.input} value={data} onChangeText={setData} />

      <Button title="Salvar" onPress={addDespesa} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 },
});

export default AddExpenseScreen;
