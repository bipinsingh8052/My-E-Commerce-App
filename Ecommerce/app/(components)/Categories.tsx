import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import Loader from "../(components)/Loader";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import See_All from "./See_All";

export default function Categories() {
  const route = useRouter();
  const [activeCategory, setActiveCategory] = useState(false);
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);
  const [storeApi,setStoreApi]=useState("");

  let loading = async () => {
    setloader(true);
    let api = "https://nexx-js-e-commerce-app-491i.vercel.app/api/categories";
    setStoreApi(api);
    try {
      let response = await axios.get(api);
      // const json=await response.json()
      // console.log(response.data.imageUrl,"img url")
      // console.log(response.data);
      // console.log(json)
      setData(response.data);

      setloader(false);
    } catch (error) {
      setloader(false);
    }
  };



  // see all items
  const seeAllItems=()=>{
    route.push(`/See_All?api=${storeApi}`)
  }
  // see all items

  const gotoNext = (id) => {
    console.log(id);
    // route.push(`/Product_Detail?id=${id}`);
    route.push(`/categories_All?id=${id}`);
  };
  useEffect(() => {
    loading();
  }, []);

  return (
    <View
      style={{ height: 300, marginTop: 10, marginLeft: 10, marginRight: 10 }}
    >
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700" }}>Categories</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>See All</Text>
          <View
            style={{ backgroundColor: "blue", padding: 10, borderRadius: 50 }}
          >
          <TouchableOpacity onPress={()=>{seeAllItems()}}>
          <AntDesign name="arrowright" size={20} color={"white"} />
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <Loader loading={loader} />

      {/* <ScrollView horizontal> */}
        <View style={{ flexDirection:"row", flexWrap:"wrap" }}>
          <FlatList
            data={data}
            horizontal
            style={{ flexDirection:"row", flexWrap:"wrap"}}
            keyExtractor={(item) => item._id} // Adjust based on your data structure
            renderItem={({ item }) => 
              (
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(true), gotoNext(item._id);
                }}
                style={{
                  elevation: 10,
                  // borderWidth: 1,
                  borderColor: "transprent",
                  marginHorizontal: 5,
                  borderRadius: 5,
                  shadowColor: "#000",
                  shadowOpacity: 0.25,
                  shadowRadius: 8,
                  overflow: "hidden",
                  marginTop: 5,
                  backgroundColor: activeCategory ? "#f0f8ff" : "#fff", // Change background color on click
                }}
              >
                <View style={{ height: 220, width: 170, flexDirection: "row" }}>
                  <View
                    style={{
                      height: 210,
                      width: 170,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: 2,
                      paddingLeft: 4,
                      paddingTop: 2,
                    }}
                  >
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={{ height: 80, width: 80, borderRadius: 5 }}
                    />
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={{ height: 80, width: 80, borderRadius: 5 }}
                    />
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={{ height: 80, width: 80, borderRadius: 5 }}
                    />
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={{ height: 80, width: 80, borderRadius: 5 }}
                    />
                    <View
                      style={{
                        paddingLeft: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 20,
                          fontWeight: "700",
                          paddingTop: 10,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "200",
                          marginRight: 10,
                          paddingTop: 10,
                          paddingLeft: 30,
                        }}
                      >
                        New
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          {/* {
            data.map((item,index)=>{return(
              <TouchableOpacity key={index}
              onPress={() => {
                setActiveCategory(true), gotoNext(item._id);
              }}
              style={{
                elevation: 10,
                // borderWidth: 1,
                borderColor: "transprent",
                marginHorizontal: 5,
                borderRadius: 5,
                shadowColor: "#000",
                shadowOpacity: 0.25,
                shadowRadius: 8,
                overflow: "hidden",
                marginTop: 5,
                backgroundColor: activeCategory ? "#f0f8ff" : "#fff", // Change background color on click
              }}
            >
              <View style={{ height: 220, width: 170, flexDirection: "row" }}>
                <View
                  style={{
                    height: 220,
                    width: 170,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 2,
                    paddingLeft: 4,
                    paddingTop: 2,
                  }}
                >
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                  />
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                  />
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                  />
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                  />
                  <View
                    style={{
                      paddingLeft: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "700",
                        paddingTop: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "200",
                        marginRight: 10,
                        paddingTop: 10,
                        paddingLeft: 30,
                      }}
                    >
                      New
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            )})
          } */}
        </View>
      {/* </ScrollView> */}
    </View>
  );
}
