import * as React from "react";
import { View, Platform, StyleSheet, FlatList, ScrollView } from "react-native";
import { Appbar, Text, Menu, Button, Divider } from "react-native-paper";
import { useUser, useAuth } from "@clerk/clerk-expo";
import TrackListItem from "../components/TrackListItem";
import { tracks } from "../assets/data/tracks";
import ArtistListItem from "../components/ArtistListItem";
import SongListItem from "../components/SongListItem";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const HomeScreen = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View>
      <View>
        <Appbar.Header elevated>
          <Appbar.Content title={"Welcome " + user.username} />

          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon={MORE_ICON} onPress={openMenu} />}
          >
            <Menu.Item
              onPress={() => signOut()}
              leadingIcon="logout"
              title="Sign Out"
            />
          </Menu>
        </Appbar.Header>
      </View>
      <View>
        <ScrollView>
          <View style={{ paddingTop: 15, paddingLeft: 5, paddingBottom: 5 }}>
            <Text
              variant="headlineSmall"
              style={{ fontWeight: "bold", color: "black" }}
            >
              Popular Albums
            </Text>
            <ScrollView horizontal style={{ marginTop: 10 }}>
              {tracks.map((item, index) => {
                return (
                  <TrackListItem
                    key={item.id + "album" + index}
                    name={item.album.name}
                    url={item.album.images[1].url}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={{ paddingTop: 15, paddingLeft: 5, paddingBottom: 25 }}>
            <Text
              variant="headlineSmall"
              style={{ fontWeight: "bold", color: "black" }}
            >
              Popular Artists
            </Text>
            <ScrollView horizontal style={{ marginTop: 10 }}>
              {tracks.map((item, index) => {
                return (
                  <ArtistListItem
                    key={item.id + "artist" + index}
                    name={item.artists[0].name}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={{ paddingTop: 15, paddingLeft: 5, paddingBottom: 25 }}>
            <Text
              variant="headlineSmall"
              style={{ fontWeight: "bold", color: "black" }}
            >
              All Songs
            </Text>
            <ScrollView style={{ marginTop: 10 }}>
              {tracks.map((item, index) => {
                if (item.preview_url !== null) {
                  return (
                    <View key={item.id + "song" + index}>
                      <SongListItem
                        songName={item.name}
                        artistName={item.artists[0].name}
                        imgUri={item.album.images[0].url}
                        rightIcon
                      />
                      <Divider />
                    </View>
                  );
                }
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
