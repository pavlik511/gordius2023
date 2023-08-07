import { useState, useEffect } from "react";
import { Slot, usePathname, router } from "expo-router";
import { StatusBar, Dimensions, View, Image, Pressable } from "react-native";
import Menu from "../components/Menu";

export default function HomeLayout() {
  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState(Dimensions.get("screen").width);
  const path = usePathname()

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
    <>
      <StatusBar hidden={true} />
      <View
        style={{
          flexDirection: "row",
          width,
          height,
        }}
      >
        
        {
          path === "/" ? 
            <Pressable style={{
              width:"100%",
              height:"100%"
            }}
            onPress={
              ()=>{
                router.replace("/indikace")
              }
            }
            >
          <Image 
          style={{
            width:"100%",
            height:"100%",
            resizeMode:"contain"
          }}
          source={require("../assets/splash.png")}/></Pressable>: 
          <>
          <Menu />
        <View
          style={{
            flex: 8,
          }}
        >
          <Slot />
        </View>
          </>
        }
        
      </View>
    </>
  );
}
