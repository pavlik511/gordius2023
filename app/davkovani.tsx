import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

const Davkovani = () => {
  return (
    <>
      <Text style={{ marginTop: 30 }}></Text>
      <View style={styles.flex}>
        <Image
          style={styles.image}
          source={require("../assets/davkovani.png")}
        />
      </View>
    </>
  );
};

export default Davkovani;
const styles = StyleSheet.create({
  image: {
    resizeMode: "stretch",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
