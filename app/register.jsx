import { useState } from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function RegisterPage() {
  // initialized variables states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  // initialized router
  const router = useRouter();

  return (
    // main contianer
    <View style={styles.container}>
      {/* image container */}
      <View style={styles.imgContainer}>
        {/* image */}
        <Image
          source={{
            uri: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png",
          }}
          style={styles.logo}
        />
      </View>
      {/* form container */}
      <View style={styles.formContainer}>
        {/* email input */}
        <TextInput
          inputMode="text"
          placeholder="Email address or username"
          autoComplete="email"
          style={styles.inputStyle}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        {/* password input */}
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          autoComplete="password"
          style={styles.inputStyle}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        {/* confirm password input */}
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          autoComplete="password"
          style={styles.inputStyle}
          value={cpassword}
          onChangeText={(value) => setCPassword(value)}
        />
        {/* sign up button */}
        <TouchableHighlight
          style={styles.btnTouchable}
          onPress={() => console.log(email, password, cpassword)}
        >
          <View style={styles.btnView}>
            <Text style={styles.buttonLabel}>SIGN UP</Text>
          </View>
        </TouchableHighlight>
        {/* log in screen redirecting text */}
        <View style={styles.login}>
          <Text>Already a User?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.loginText}>Sign In!</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    flex: 2,
    marginTop: 70,
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  logo: {
    width: 200,
    height: 60,
  },
  inputStyle: {
    borderWidth: 1,
    width: "100%",
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  btnTouchable: {
    width: "100%",
  },
  btnView: {
    width: "100%",
    backgroundColor: "#58b560",
    borderRadius: 50,
    padding: 15,
  },
  buttonLabel: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  login: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
  },
  loginText: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});
