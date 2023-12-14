import { Card, Text } from "react-native-paper";

const TrackListItem = ({ name, url }) => {
  return (
    <Card mode="contained" style={{ margin: 3, width: 150 }}>
      <Card.Cover
        source={{
          uri: url,
        }}
      />
      <Card.Content>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          variant="bodyMedium"
          style={{ paddingTop: 10, fontWeight: "bold" }}
        >
          {name}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default TrackListItem;
