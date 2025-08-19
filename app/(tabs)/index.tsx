import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function IndexScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (email === 'antercode707@gmail.com' && password === '123456') {
        Alert.alert('Success', 'Login successful! 🎉');
      } else {
        Alert.alert('Error', 'Incorrect email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleRegister = () => {
    Alert.alert('Info', 'Registration feature will be implemented soon');
  };

  const handleForgotPassword = () => {
    Alert.alert('Info', 'Password reset feature will be implemented soon');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.appName}>SplitMate</Text>
          <Text style={styles.tagline}>Share expenses with friends</Text>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A0A0A0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0A0A0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Loading...' : 'Login'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        {/* Register Section */}
        <View style={styles.registerSection}>
          <Text style={styles.registerText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.registerLink}>Create a new account</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1B14',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4D734C',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#1A2B1F',
    borderRadius: 20,
    padding: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#2D4A32',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D0D0D0',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#D0D0D0',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#2A4038',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#D0D0D0',
    borderWidth: 1,
    borderColor: '#3B593F',
  },
  loginButton: {
    backgroundColor: '#4D734C',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonDisabled: {
    backgroundColor: '#3A5A39',
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#4D734C',
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  registerSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  registerText: {
    color: '#A0A0A0',
    fontSize: 16,
    marginBottom: 8,
  },
  registerLink: {
    color: '#4D734C',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  testInfo: {
    backgroundColor: '#1A1A2E',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  testTitle: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  testCredentials: {
    color: '#FFD700',
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
});
