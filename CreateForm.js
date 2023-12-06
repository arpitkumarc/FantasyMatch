// CreateAccountScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import CreateAccountScreen from './CreateAccountScreen'; // Path to your CreateAccountForm component
//import { createAccount } from './api'; // Define your API function to interact with Realm

const CreateScreen = () => {
  const handleFormSubmit = async (formData) => {
    try {
      // Call your API function to create the account in Realm
      await createAccount(formData);
      console.log('Account created successfully!');
      // Navigate to the next screen or perform any other actions
    } catch (error) {
      console.error('Error creating account: ', error);
    }
  };

  return (
    <View>
      <Text>Create Account</Text>
      <CreateAccountForm onFormSubmit={handleFormSubmit} />
    </View>
  );
};

export default CreateAccountScreen;
