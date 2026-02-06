import { Stack } from 'expo-router';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash"/>
      <Stack.Screen name="login"/>
      <Stack.Screen name="home"/>
      <Stack.Screen name="quiz"/>
      <Stack.Screen name="profile"/>
    </Stack>
  );
}
