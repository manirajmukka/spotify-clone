import { registerRootComponent } from "expo";
import TrackPlayer from "react-native-track-player";
import App from "./App";

registerRootComponent(App);
//Player Service
TrackPlayer.registerPlaybackService(() => require("./service"));
