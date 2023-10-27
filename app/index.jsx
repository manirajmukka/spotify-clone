import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";

export default function StartPage() {
  // initialized router
  const router = useRouter();
  return (
    // main container
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
      {/* quote container */}
      <View style={styles.quote}>
        {/* quote text */}
        <Text style={styles.quoteText}>We play the music.</Text>
        <Text style={styles.quoteText}>You enjoy it. Deal?</Text>
      </View>
      <View style={styles.formContainer}>
        {/* log in and sign up buttons */}
        <TouchableHighlight
          style={styles.signUpBtn}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.signUpLabel}>SIGN UP</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.loginBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginLabel}>LOG IN</Text>
        </TouchableHighlight>
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
  quote: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
  },
  formContainer: {
    flex: 2,
    marginTop: 30,
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  logo: {
    width: 200,
    height: 60,
  },
  quoteText: {
    fontSize: 42,
    fontWeight: "bold",
  },
  signUpBtn: {
    width: "100%",
    backgroundColor: "#58b560",
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  signUpLabel: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginBtn: {
    width: "100%",
    borderWidth: 1,
    borderBlockColor: "#d1d1d1",
    borderLeftColor: "#d1d1d1",
    borderRightColor: "#d1d1d1",
    borderRadius: 50,
    padding: 15,
  },
  loginLabel: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
