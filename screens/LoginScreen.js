import * as React from "react";
import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useSignIn } from "@clerk/clerk-expo";

const LoginScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          gap: 10,
          width: "85%",
          marginTop: 25,
        }}
      >
        <View>
          <Text variant="titleMedium">Enter log in information</Text>
        </View>
        <View>
          <TextInput
            label="Email Address"
            mode="outlined"
            textContentType="emailAddress"
            value={emailAddress}
            onChangeText={(text) => setEmailAddress(text)}
          />
        </View>
        <View>
          <TextInput
            label="Password"
            mode="outlined"
            textContentType="password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View>
          <Button mode="outlined" onPress={onSignInPress}>
            <Text>Log In</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
