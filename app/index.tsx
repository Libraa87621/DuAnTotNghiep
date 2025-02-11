import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
  password: Yup.string().min(6, 'Ít nhất 6 ký tự').required('Bắt buộc'),
});

export default function LoginScreen() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email && <Text>{errors.email}</Text>}

          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password && <Text>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Đăng nhập" />
        </View>
      )}
    </Formik>
  );
}
