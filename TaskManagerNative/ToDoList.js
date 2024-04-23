import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(text) {
    setNewTask(text);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>To-Do List</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: 'gray', paddingHorizontal: 10, marginRight: 10 }}
          placeholder="Enter a Task..."
          value={newTask}
          onChangeText={handleInputChange}
        />
        <Button
          title="Add"
          onPress={addTask}
        />
      </View>
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        {tasks.map((task, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 16 }}>{task}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <Text style={{ color: 'red', marginRight: 10 }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => moveTaskUp(index)}>
                <Text style={{ color: 'blue', marginRight: 10 }}>Up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => moveTaskDown(index)}>
                <Text style={{ color: 'green' }}>Down</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default ToDoList;
