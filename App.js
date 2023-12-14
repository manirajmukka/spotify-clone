import { StyleSheet } from "react-native";

import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import IntroScreen from "./screens/IntroScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import MusicPlayerScreen from "./screens/MusicPlayerScreen";
import SearchScreen from "./screens/SearchScreen";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

//Clerk
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

//Navigation using React Navigation
const Stack = createNativeStackNavigator();

//Tab Navigation
const Tab = createBottomTabNavigator();

const SignedInNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          //tab bar icons
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Player") {
            iconName = focused ? "musical-notes" : "musical-notes-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: "7%",
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      {/* tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Player" component={MusicPlayerScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const SignedOutNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="index" component={IntroScreen} />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerTitle: "Log in", headerShown: true }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerTitle: "Create account", headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    //Clerk Provider
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      {/* react native status bar styling */}
      <SafeAreaProvider>
        {/* components styling */}
        <PaperProvider theme={{ dark: true }}>
          {/* react navigation provider */}
          <NavigationContainer>
            {/* sign in nav */}
            <SignedIn>
              <SignedInNav />
            </SignedIn>
            {/* sign out nav */}
            <SignedOut>
              <SignedOutNav />
            </SignedOut>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
