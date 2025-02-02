import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Message {
  id: string;
  text: string;
  sender: 'subscriber' | 'blogger';
}

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    // Pre-defined messages can be added here
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, sender: 'subscriber' }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        style={styles.messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={[styles.message, item.sender === 'subscriber' ? styles.subscriber : styles.blogger]}>
            {item.text}
          </Text>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder="Type a message..." />
        <Pressable style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', borderRadius: 8}} onPress={sendMessage}>
          <Ionicons name="send" size={20} color={'#fff'}/>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  messages: { flex: 1 },
  message: { padding: 10, borderRadius: 8, marginVertical: 5, color: '#fff' },
  subscriber: { backgroundColor: '#000', alignSelf: 'flex-end' },
  blogger: { backgroundColor: '#FFF', alignSelf: 'flex-start' },
  inputContainer: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginRight: 10, backgroundColor: '#fff' },
});
