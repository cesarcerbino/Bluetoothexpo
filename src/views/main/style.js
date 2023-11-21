import { horizontalScale, moderateScale, verticalScale } from "../../utils/dim";

import COLORS from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  maincont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});
