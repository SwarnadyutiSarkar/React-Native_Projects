// ExpenseTrackerApp.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ExpenseTrackerApp = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (newExpense.trim() !== '' && amount.trim() !== '') {
      setExpenses([...expenses, { id: Date.now().toString(), expense: newExpense, amount: parseFloat(amount) }]);
      setNewExpense('');
      setAmount('');
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Expense Tracker App</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, marginRight: 10 }}
          placeholder="Expense"
          value={newExpense}
          onChangeText={(text) => setNewExpense(text)}
        />
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, marginRight: 10 }}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
        <Button title="Add" onPress={handleAddExpense} />
      </View>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{item.expense}</Text>
            <Text style={{ marginRight: 10 }}>${item.amount}</Text>
            <Button title="Delete" onPress={() => handleDeleteExpense(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={{ fontSize: 18, marginTop: 10 }}>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

export default ExpenseTrackerApp;
