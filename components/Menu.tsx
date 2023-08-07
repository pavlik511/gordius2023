import { StyleSheet, View, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Menu = () => {
  return (
    <View style={{
      flex:2,
      zIndex:2
    }}>
      <Link href="/" style={{
          position:"absolute",
          top:0,
          left:0,
          padding:4,
          zIndex:100000
        
      }} asChild>
       <Pressable onPress={()=>{
        console.log("Pressed")
       }}>
       <Image source={require("../assets/jezek.jpg")}
        />
       </Pressable>
     
      </Link>
     
<View style={{
  height:"100%",
  justifyContent:"center",
  marginLeft:20,

}}>
      <Link href="/indikace" style={styles.menuItem}>INDIKACE</Link>
      <Link href="/lekovyprofil" style={styles.menuItem}>LÉKOVÝ PROFIL</Link>
      <Link href="/davkovani" style={styles.menuItem}>DÁVKOVÁNÍ</Link>
      <Link href="/baleni" style={styles.menuItem}>BALENÍ</Link>
      <Link href="/spc" style={styles.menuItem}>SPC</Link>
</View>
     

      <Image source={require("../assets/krabicka_logo2.png")} style={{
        width: "100%",
        height: "20%",
        position:"absolute",
        bottom:0,
        left:0,
        padding:4
      }}/>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  menuItem:{
    fontSize:18,
    color:"grey",
    marginBottom:30
  }
})