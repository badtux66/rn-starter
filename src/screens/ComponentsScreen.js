import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = 'My name is Edip';
   return (
    
     <View>
        <Text style={styles.textStyle}>Getting statred with react native!</Text>
        <Text style={styles.subHeaderStyle}>{greeting}</Text>
    </View> 
   
   );
};

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 45
    },
    subHeaderStyle: {
      fontSize: 20
    }
});

export default ComponentsScreen;