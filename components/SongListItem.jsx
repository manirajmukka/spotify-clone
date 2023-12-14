import * as React from "react";
import { View } from "react-native";
import { List, Avatar, TouchableRipple } from "react-native-paper";

const SongListItem = ({ songName, artistName, imgUri, rightIcon }) => {
  return (
    <View>
      <TouchableRipple rippleColor="#1DB954">
        <List.Item
          title={songName}
          description={artistName}
          left={(props) => (
            <Avatar.Image {...props} size={42} source={{ uri: imgUri }} />
          )}
          right={(props) => {
            return rightIcon ? (
              <List.Icon {...props} color="#1DB954" icon="play-circle" />
            ) : (
              ""
            );
          }}
          titleStyle={{ color: "black", fontWeight: "500" }}
          descriptionStyle={{ color: "gray" }}
        />
      </TouchableRipple>
    </View>
  );
};

export default SongListItem;
