import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MainButton from "../../components/MainButton";
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Image
              source={{ uri: "https://i.pravatar.cc/300" }}
              style={styles.images}
            />
            <View style={{ marginLeft: 25 }}>
              <Text style={styles.title}>{user && user.name}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.userInfor}>
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={21}
            color="#ff0000"
          />
          <Text style={{ color: "#666666", marginLeft: 25, fontSize: 16 }}>
            Cầu Giấy, Hà Nội
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfor}>
          <Feather name="phone-call" size={21} color="#ff6666" />
          <Text style={{ color: "#666666", marginLeft: 25, fontSize: 16 }}>
            (+84) 985104987
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userInfor}>
          <MaterialCommunityIcons name="gmail" size={21} color="#ff6666" />
          <Text style={{ color: "#666666", marginLeft: 25, fontSize: 16 }}>
            {user && user.email}
          </Text>
        </TouchableOpacity>

        <View style={styles.boxwrap}>
          <View
            style={[
              styles.box,
              {
                borderRightColor: "#C6C5C5",
                borderRightWidth: 1,
              },
            ]}
          >
            <TouchableOpacity>
              <Text style={{ color: "#ff6666", fontWeight: "bold" }}>
                1.567.890 đ
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "#666666", fontWeight: "bold" }}>
              Ví tiền
            </Text>
          </View>
          <View style={styles.box}>
            <TouchableOpacity>
              <Text style={{ color: "#ff6666", fontWeight: "bold" }}>12</Text>
            </TouchableOpacity>
            <Text style={{ color: "#666666", fontWeight: "bold" }}>
              Đơn hàng
            </Text>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
            <View style={styles.menuItem}>
              <AntDesign name="profile" size={18} color="#ff6666" />
              <Text style={styles.menuItemText}>Chỉnh sửa thông tin</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <FontAwesome5
                name="hand-holding-heart"
                size={18}
                color="#ff6666"
              />
              <Text style={styles.menuItemText}>Yêu thích</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <MaterialIcons name="payment" size={20} color="#ff6666" />
              <Text style={styles.menuItemText}>Thanh toán</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <FontAwesome name="share" size={18} color="#ff6666" />
              <Text style={styles.menuItemText}>Chia sẻ với bạn bè</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <MaterialIcons name="support-agent" size={20} color="#ff6666" />
              <Text style={styles.menuItemText}>Hỗ trợ</Text>
            </View>
          </TouchableOpacity>
          <MainButton
            onPress={logOut}
            style={{ backgroundColor: "#ff6666", marginBottom: 100 }}
            title={"Đăng Xuất"}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  images: {
    marginLeft: 20,
    marginTop: 25,
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  title: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: "bold",
    color: "#ff6666",
  },
  caption: {
    color: "#666666",
    fontSize: 16,
  },
  userInfor: {
    marginTop: 15,
    marginLeft: 20,
    flexDirection: "row",
  },
  boxwrap: {
    borderBottomColor: "#C6C5C5",
    borderBottomWidth: 1,
    borderTopColor: "#C6C5C5",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
    marginTop: 15,
  },
  box: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItem: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 20,
    fontSize: 16,
  },
  menuItemText: {
    color: "#666666",
    marginLeft: 25,
    fontSize: 16,
  },
});
