import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    // flexDirectionでコンテンツを横並びにできる、columnにした場合は縦になる(default縦)
    flexDirection: "row",
  },
  itemContainer2: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    // flexDirectionでコンテンツを横並びにできる、columnにした場合は縦になる(default縦)
    flexDirection: "row",
    backgroundColor: "black"
  },
  // 左の項目
  leftContainer: {
    width: 100,
  },
  // 右の項目
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

const ListItem = ({ author, imageUrl, title, onPress, id, obj }) => {
  console.log("キー！！！！", id)
  console.log(id === obj.key)
  const sty = id === obj.key ? styles.itemContainer2 : styles.itemContainer
  return (
    <TouchableOpacity style={sty} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && (
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: imageUrl,
            }}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
