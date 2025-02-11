// app/splash.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('index'); // Điều hướng tới Trang chủ sau 2 giây
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với ứng dụng của chúng tôi!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200EE',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
});
