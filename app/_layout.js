import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Intro", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ headerTitle: "Log In", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ headerTitle: "Sign Up", headerShown: false }}
      />
      <Stack.Screen
        name="home"
        options={{ headerTitle: "Home", headerShown: true }}
      />
    </Stack>
  );
}
