/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import AppLayout from '../components/AppLayout';
import { useAuthStore } from '../store/useAuthStore';
import { sign } from 'react-native-pure-jwt';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from '../assets/styles/auth.styles';
// import { COLORS } from '../constants/colors';

export default function LoginScreen() {
  const login = useAuthStore(state => state.login);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSignInPress = async () => {
    if (emailAddress === 'test@example.com' && password === '123456') {
      const secret = 'my_secret_key';
      try {
        const token = await sign(
          { email: emailAddress, exp: Math.floor(Date.now() / 1000) + 3600 },
          secret,
          { alg: 'HS256' },
        );
        login(emailAddress, token);
      } catch (err) {
        setError('Failed to generate token');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <AppLayout>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={30}
      >
        <View style={styles.container}>
          <Image
            source={require('../assets/images/revenue-i3.png')}
            style={styles.illustration}
          />
          <Text style={styles.title}>Welcome Back</Text>

          {error ? (
            <View style={styles.errorBox}>
              {/* <Ionicons name="alert-circle" size={20} color={COLORS.expense} /> */}
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity onPress={() => setError('')}>
                {/* <Ionicons name="close" size={20} color={COLORS.textLight} /> */}
              </TouchableOpacity>
            </View>
          ) : null}

          <TextInput
            style={[styles.input, error && styles.errorInput]}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            placeholderTextColor="#9A8478"
            onChangeText={emailAddress => setEmailAddress(emailAddress)}
          />

          <TextInput
            style={[styles.input, error && styles.errorInput]}
            value={password}
            placeholder="Enter password"
            placeholderTextColor="#9A8478"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />

          <TouchableOpacity style={styles.button} onPress={onSignInPress}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </AppLayout>
  );
}
