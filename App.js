import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.uniCon}>
        <Text style={styles.titleText}>University Details</Text>
      </View>
      <View style={styles.textMargin}>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>Name:</Text>
          <Text style={styles.textReg}>S.G. Hasintha Lahiru</Text>
        </View>
      </View>
      <View style={styles.textMargin}>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>Registration No:</Text>
          <Text style={styles.textReg}>S/17/448</Text>
        </View>
      </View>
      <View style={styles.textMargin}>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>Courses:</Text>
          <Text style={styles.textReg}>Combined Mathematics</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textBold}> </Text>
          <Text style={styles.textReg}>Physics</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textBold}> </Text>
          <Text style={styles.textReg}>Computer Science</Text>
        </View>
      </View>
      <View style={styles.textMargin}>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>Extra Activities</Text>
          <Text style={styles.textReg}>Member of CSUP</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textBold}> </Text>
          <Text style={styles.textReg}>Member of PeraBeats Media Club</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textBold}> </Text>
          <Text style={styles.textReg}>Member of Wibhawa Literatue Club</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textBold}> </Text>
          <Text style={styles.textReg}>
            Member of University KungFu-Wushu Team
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  uniCon: {
    backgroundColor: "#ccf",
    padding: 15,
    alignItems: "center",
    marginTop: 45,
  },

  titleText: {
    fontSize: 20,
  },

  textBold: {
    flex: 1,
    margin: 10,
    fontWeight: "bold",
    fontSize: 18,
  },

  textReg: {
    flex: 2,
    margin: 10,
    fontSize: 18,
  },

  textContainer: {
    flexDirection: "row",
    backgroundColor: "#ccc",
  },

  textMargin: {
    margin: 5,
  },
});
