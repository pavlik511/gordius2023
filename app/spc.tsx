import React,{useState} from "react";
import { WebView } from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
const Spc = () => {
  const [loadComponent, setLoadComponent] = useState(false)
  useFocusEffect(() => {
      setLoadComponent(true)
      return () => {
          setLoadComponent(false)
      }
  })
  return (
    
      <View style={{ width: "100%", height: "100%" }}>
                    {
                        loadComponent && <WebView
                            originWhitelist={["file://*", "http://*", "https://*"]}
                            source={require("../assets/gordius-spc.pdf")}
                            allowFileAccess
                            allowUniversalAccessFromFileURLs
                            allowFileAccessFromFileURLs
                        ></WebView>
                    }

                </View>
    
  );
};

export default Spc;