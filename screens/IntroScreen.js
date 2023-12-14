import { StyleSheet, Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const IntroScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#191414",
          justifyContent: "space-evenly",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "40%",
          }}
        >
          <Image
            alt="logo_white"
            source={{
              uri: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png",
            }}
            style={styles.logo}
          />
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            height: "60%",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white",
                padding: 10,
              }}
            >
              Millions of songs.
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                color: "white",
                padding: 10,
              }}
            >
              Free on Spotify.
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Button
              onPress={() => navigation.navigate("register")}
              style={{
                width: "85%",
                borderRadius: 20,
                backgroundColor: "#1DB954",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Sign Up
              </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate("login")}
              style={{
                width: "85%",
                borderRadius: 20,
                backgroundColor: "#191414",
                borderColor: "#eff0eb",
                borderWidth: 1,
                marginTop: 12,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Log in</Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 60,
  },
});

export default IntroScreen;
