import * as React from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";

const getInitials = (name) => {
  return name
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("");
};

const ArtistListItem = ({ name }) => {
  const initials = getInitials(name);

  return (
    <View style={{ margin: 3, width: 135 }}>
      <Avatar.Text size={125} label={initials} />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          textAlign: "center",
          paddingTop: 10,
          fontWeight: "bold",
          color: "black",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default ArtistListItem;
