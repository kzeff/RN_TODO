import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/InputBox';
import TodoItem from './app/components/TodoItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headercentered}>
        <Header/>
      </View>
      <View style={styles.subContainer}>
        <SubTitle title='할 일을 입력해주세요'/>
        <Input/>
      </View>
      <View style={styles.subContainer}>
        <SubTitle title='해야할 일 목록'/>
        <TodoItem text='코딩하기'/>
        <TodoItem text='운동하기'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headercentered:{
    alignItems:'center',
  },
  subContainer:{
    marginLeft:20,
  },
});
