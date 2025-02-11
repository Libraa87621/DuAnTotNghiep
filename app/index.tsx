import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema với Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
  password: Yup.string().min(6, 'Ít nhất 6 ký tự').required('Bắt buộc'),
});

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor="#999"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

// Style cho giao diện
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
