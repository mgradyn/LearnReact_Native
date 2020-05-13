import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextPassword = () => {
    const [password, setPassword] = useState('');
    return (<View>
        <Text>Enter Password:</Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}    
            value={password}
            onChangeText={(newValue)=> setPassword(newValue)}
        />
        {password.length < 5 ? <Text>Pssword must be longer than 5 characters</Text> : null}
    </View>);
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextPassword;