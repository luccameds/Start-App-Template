import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Esta é a "HomeScreen"!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  label: { color: "black", alignSelf: "center" },
});
