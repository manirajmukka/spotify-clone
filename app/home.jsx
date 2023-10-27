import { ImageBackground, View, StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

// image url
const image = {
  uri: "https://images.unsplash.com/photo-1579547944064-0180251f94c8",
};

export default function HomePage() {
  // extracting email from router params
  const { email } = useLocalSearchParams();

  return (
    // main container
    <View style={styles.container}>
      {/* background */}
      <ImageBackground source={image} style={styles.imgContainer}>
        {/* text on top of the image */}
        <View style={styles.txtContainer}>
          <Text style={styles.title}>Hello User!</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
  },
  txtContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  email: {
    marginTop: 10,
    fontSize: 20,
    color: "#ffffff",
  },
});
