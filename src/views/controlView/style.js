import { horizontalScale, moderateScale, verticalScale } from "../../utils/dim";

import COLORS from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  maincont: {
    flex: 1,
    alignItems: "center",
    paddingVertical: verticalScale(160),

    backgroundColor: COLORS.background,
  },
  extraCont: {
    flexDirection: "row",
    width: horizontalScale(300),
    justifyContent: "space-between",
  },
  tittle: {
    marginVertical: verticalScale(25),
    color: "white",
    fontSize: moderateScale(25),
    fontWeight: "500",
  },
});
