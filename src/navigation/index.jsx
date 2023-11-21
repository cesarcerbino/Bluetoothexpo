import { ControlView, MainView } from "../views/index";
import { Text, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../utils/dim";

import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNavigator = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: COLORS.dblue,
            height: verticalScale(60),
            padding: moderateScale(10),
          },
        })}
      >
        <TabNavigator.Screen
          name="main"
          component={ControlView}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="game-controller-outline"
                  size={moderateScale(26)}
                  color={focused ? "white" : "black"}
                />
                <Text style={{ textAlign: "center" }}>Joystick</Text>
              </View>
            ),
            headerShown: false,
            tabBarLabel: "",
          }}
        />
        <TabNavigator.Screen
          name="map"
          component={MainView}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="map-outline"
                  size={moderateScale(26)}
                  color={focused ? "white" : "black"}
                />
                <Text style={{ textAlign: "center" }}>Mapa</Text>
              </View>
            ),
            headerShown: false,
            tabBarLabel: "",
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
