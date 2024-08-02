// components/TodoItem.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <View style={styles.item}>
      <Text>{todo.text}</Text>
      <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default TodoItem;
