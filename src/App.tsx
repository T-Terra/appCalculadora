import React from "react"
import { SafeAreaView, Text, StyleSheet, View } from "react-native"
import Button from "./components/Button"

export default App = () => {
  return (
    <SafeAreaView style={style.buttons}>
      <View style={style.buttons}>
        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: "wrap",
  }
})