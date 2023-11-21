import {
  CustomButton,
  CustomJoystick,
  CustomText,
} from "../../components/index";
import { React, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

console.log("loaded");

const ControlView = () => {
  return (
    <View style={styles.maincont}>
      <Text style={styles.tittle}>VOLT EXPLORER</Text>
      <CustomJoystick />
      <View style={styles.extraCont}>
        <CustomButton ChildComponnet={() => <CustomText text="Frenar" />} />
        <CustomButton ChildComponnet={() => <CustomText text="Luces" />} />
      </View>
    </View>
  );
};

export default ControlView;
