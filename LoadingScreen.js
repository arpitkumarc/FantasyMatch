// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator,StyleSheet } from 'react-native';


const LoadingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., checking authentication)
    const fakeAsyncOperation = async () => {
      // Replace this with your actual authentication check
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set loading to false after the operation is complete
      setLoading(false);
    };

    fakeAsyncOperation();
  }, []);

  useEffect(() => {
    // Navigate to the Login screen after loading is complete
    if (!loading) {
      navigation.replace('Login');
    }
  }, [loading, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.innerText}>Fantasy Match</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
    innerText:{
      color:'red',
      fontWeight:'bold',
      fontSize:50,
    },
  });

export default LoadingScreen;
