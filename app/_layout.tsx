import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#6200EE' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      animation: 'slide_from_right',
    }}>
      {/* SplashScreen sẽ không có header */}
      <Stack.Screen name="splash" options={{ headerShown: true }} />
      <Stack.Screen name="index" options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="login" options={{ title: 'Đăng nhập' }} />
      <Stack.Screen name="profile" options={{ title: 'Hồ sơ' }} />
    </Stack>
  );
}
