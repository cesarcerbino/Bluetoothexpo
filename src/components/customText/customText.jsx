import { Text, View } from "react-native";

import React from "react";

const CustomText = ({ text = "hello world" }) => {
  return <Text>{text}</Text>;
};

export default CustomText;
