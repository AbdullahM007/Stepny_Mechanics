import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';


const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('');
  const [city, setCity] = useState('');
  const [value, setValue] = useState(null);

  const navigation = useNavigation();

  const handleSignUp = () => {
    // Add sign-up logic here using APIs, registration, etc.
    // For simplicity, we're not implementing any logic.

    // Example validation: Ensure all required fields are filled
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber || !phoneCountryCode || !city) {
      alert('Please fill in all the fields.');
      return;
    }

    // Example validation: Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Example: Navigate to HomeScreen after successful sign-up
    navigation.navigate('Home');
  };
  const Cities = [
    { label: 'Lahore', value: 'Lahore' },
    { label: 'Gujranwala', value: 'Gujranwala' },
    { label: 'Gujrat', value: 'Gujrat' },
    
  ];
  const CountryCodes =[
    { label:'(+92)', value:'+92' }
  ]
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={'black'}
        value={firstName}
        onChangeText={(text) => setFirstName(text.replace(/[^a-zA-Z ]/g, ''))}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={'black'}
        value={lastName}
        onChangeText={(text) => setLastName(text.replace(/[^a-zA-Z ]/g, ''))}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'black'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <View style={styles.phoneInputContainer}>
  {/* <Picker
    style={[styles.countryCode, { color: 'black' }]} 
    selectedValue={phoneCountryCode}
    placeholder="Ph"
    placeholderTextColor={'black'}
    onValueChange={(itemValue) => setPhoneCountryCode(itemValue)}
  >
    <Picker.Item label="Select Country Code" value="" />
    <Picker.Item label="(+92)" value="+92" />
    {/* Add more country codes as needed */}
  {/* </Picker> */}
  <Dropdown
        style={styles.countryCode}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={CountryCodes}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Country code"
        placeholderTextColor="black"
        value={phoneCountryCode}
        onChange={item => {
          setPhoneCountryCode(item.value);
        }}
        renderItem={renderItem}
      />

  <TextInput
    style={styles.phoneNumber}
    placeholder="Phone Number"
    placeholderTextColor={'black'}
    value={phoneNumber}
    onChangeText={(text) => setPhoneNumber(text.replace(/[^0-9]/g, '').substring(0, 10))}
    keyboardType="phone-pad"
  />
</View>
<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        // iconStyle={styles.iconStyle}
        data={Cities}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select City"
        searchPlaceholder="Search..."
        placeholderTextColor="black"
        value={city}
        onChange={item => {
          setCity(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />

      {/* <View style={styles.pickerContainer}>
        <Picker
        placeholder="Phone Number"
        placeholderTextColor={'black'}
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="Select City" value="" />
          <Picker.Item label="Gurjanwala" value="Gurjanwala" />
          <Picker.Item label="Gujrat" value="Gujrat" />
          <Picker.Item label="Lahore" value="Lahore" />
          {/* Add more city options as needed */}
        {/* </Picker>
      </View> */} 

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
    
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  signupButton: {
    width: '80%',
    backgroundColor: '#34C759',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  signInButton: {
    width: '80%',
    backgroundColor: '#007AFF',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  phoneInputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  countryCode: {
    width: '25%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  phoneNumber: {
    width: '70%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color:'black'
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    width:'80%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color:'black',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color:'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color:'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default SignUpScreen;
