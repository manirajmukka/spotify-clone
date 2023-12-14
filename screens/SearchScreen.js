import * as React from "react";
import { View, ScrollView } from "react-native";
import { Text, Searchbar, Divider } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tracks } from "../assets/data/tracks";
import SongListItem from "../components/SongListItem";

const SearchScreen = () => {
  const { top, right, left } = useSafeAreaInsets();

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const filteredTracks = React.useMemo(() => {
    return tracks.filter((track) =>
      track.artists[0].name.includes(searchQuery)
    );
  });

  return (
    <View style={{ paddingTop: top, paddingLeft: left, paddingRight: right }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ margin: 10 }}
      />
      <View style={{ paddingLeft: 15 }}>
        <Text
          variant="titleLarge"
          style={{ fontWeight: "bold", color: "black" }}
        >
          Your Search
        </Text>
      </View>
      <View>
        <ScrollView>
          {filteredTracks.map((track, index) => (
            <View key={index} style={{ margin: 10 }}>
              <SongListItem
                key={track.id + "song"}
                songName={track.name}
                artistName={track.artists[0].name}
                imgUri={track.album.images[0].url}
              />
              <Divider />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;
