import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Dimensions, Pressable } from "react-native";
import { Link } from "expo-router";

const Indikace = () => {
  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState(Dimensions.get("screen").width);
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setHeight(screen.height);
        setWidth(screen.width);
      }
    );

    return () => subscription?.remove();
  }, [height, width]);
  return (
    <Link href="/indikace" asChild>
        <Pressable>
        <Image
   source={require("../assets/splash.png")}
    style={{
      width: width,
      height: height,
      resizeMode: "cover",
    }}
   />

        </Pressable>
    </Link>
  
  );
};

export default Indikace;
const styles = StyleSheet.create({
  double: {
    display: "flex",
    flexDirection: "row",
  },
  lesser: {
    flex: 2,
  },
  bigger: {
    flex: 10,
  },
  mainColor: {
    color: "#CF0404",
  },
  sizeOfFont: {
    fontSize: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  grey: {
    color: "grey",
    maxWidth: "95%",
  },
  nadpis: {
    fontSize: 35,
  },
});
