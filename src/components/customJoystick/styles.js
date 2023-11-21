import { horizontalScale, moderateScale, verticalScale } from "../../utils/dim";

import COLORS from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  maincont: {
    alignItems: "center",
    justifyContent: "center",
  },
  cont1: { alignItems: "center" },
  cont2: {
    width: verticalScale(450),
    height: horizontalScale(120),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cont3: { alignItems: "center" },
});
