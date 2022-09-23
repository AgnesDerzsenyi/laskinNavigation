import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Button, TextInput, FlatList, InteractionManager,  } from 'react-native';


export default function History({route}){
  const { history } = route.params;
  

    return (
        <View style={styles.container}>
          <View styles={styles.list}>
            <FlatList
            data={history}
            ListHeaderComponent={<Text style={styles.headers}>History</Text>}
            renderItem={({ item }) => <Text>{item.text}</Text>}
            ></FlatList>
          </View>
  </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    headers: {
        marginTop: 30,
        marginBottom: 10,
        
    },
    list: {
      flex: 1,
      
    },
    textinput: {
      marginTop: 30,
      alignSelf: 'center',
      
    }
  
  });