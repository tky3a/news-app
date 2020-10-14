import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import Loading from "../components/Loading";
import Constants from "expo-constants";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default HomeScreen = (props) => {
  const { navigation } = props;
  // 最初画面がマウントされる前にarticlesに空を設定
  const [articles, setArticles] = useState([]);
  // useEffectが呼ばれるタイミング(マウントされるタイミング)で配列データをarticlesに設定
  useEffect(() => {
    // console.log("/////");
    // alert(111);
    fetchArticles();
  }, []);

  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            author={item.author}
            title={item.title}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* loading tureの場合に Loadingする*/}
      {loading && <Loading />}
    </SafeAreaView>
  );
};
