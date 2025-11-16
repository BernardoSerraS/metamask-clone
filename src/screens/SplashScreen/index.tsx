import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/metamask.png")}
        style={styles.logo}
      />

      <Image
        source={require("../../../assets/loading.png")}
        style={styles.loading}
      />
    </View>
  );
};