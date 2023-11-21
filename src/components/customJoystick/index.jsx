import { CustomButton } from "..";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const CustomJoystick = () => {
  return (
    <View style={styles.maincont}>
      <View style={styles.cont1}>
        <CustomButton
          ChildComponnet={() => (
            <Ionicons name="arrow-up-circle" size={32} color="white" />
          )}
        />
      </View>
      <View style={styles.cont2}>
        <CustomButton
          ChildComponnet={() => (
            <Ionicons name="arrow-back-circle" size={32} color="white" />
          )}
        />
        <CustomButton
          ChildComponnet={() => (
            <Ionicons name="arrow-forward-circle" size={32} color="white" />
          )}
        />
      </View>
      <View style={styles.cont3}>
        <CustomButton
          ChildComponnet={() => (
            <Ionicons name="arrow-down-circle" size={32} color="white" />
          )}
        />
      </View>
    </View>
  );
};

export default CustomJoystick;
