import * as React from "react";
import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useSignUp } from "@clerk/clerk-expo";

const RegisterScreen = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [username, setUserName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        username,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
      }}
    >
      {!pendingVerification && (
        <View
          style={{
            gap: 10,
            width: "85%",
            marginTop: 25,
          }}
        >
          <View>
            <Text variant="titleMedium">Enter account information</Text>
          </View>
          <View>
            <TextInput
              label="User Name"
              mode="outlined"
              textContentType="username"
              value={username}
              onChangeText={(text) => setUserName(text)}
            />
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
            <Button mode="outlined" onPress={onSignUpPress}>
              <Text>Sign Up</Text>
            </Button>
          </View>
        </View>
      )}
      {pendingVerification && (
        <View
          style={{
            gap: 10,
            width: "85%",
            marginTop: 25,
          }}
        >
          <View>
            <TextInput
              label="Verification Code"
              mode="outlined"
              value={code}
              textContentType="oneTimeCode"
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <Button mode="outlined" onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default RegisterScreen;
