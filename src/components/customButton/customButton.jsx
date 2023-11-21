import { Text, TouchableOpacity } from "react-native";

import React from "react";
import { styles } from "./style";

const customButton = ({ text, onPress, ChildComponnet }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      {ChildComponnet()}
    </TouchableOpacity>
  );
};

export default customButton;
