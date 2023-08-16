import { useState, useEffect } from "react";
import { Slot, usePathname } from "expo-router";
import { StatusBar, Dimensions, View } from "react-native";
import Menu from "../components/Menu";

export default function HomeLayout() {
  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState(Dimensions.get("screen").width);

 const path = usePathname();
  useEffect(() => {
    console.log(path)
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
      <View style={{
        flexDirection:"row"
      }}>
        {
          path !== "/" && <Menu />
        }
     
        <View
          style={{
            flex: 8,
          }}
        >
          <Slot />
        </View>
        </View>
    </>
  );
}
