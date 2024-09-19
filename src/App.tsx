import React from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"

export default App = () => {
  return (
    <SafeAreaView style={style.View}>
      <Text style={style.StyleFont}>Toma</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  StyleFont: {
    fontSize: 25
  },
  View: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  }
})