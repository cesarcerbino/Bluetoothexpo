import { horizontalScale, moderateScale, verticalScale } from "../../utils/dim";

import COLORS from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.dblue,
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: moderateScale(6),
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "black",
  },
});
