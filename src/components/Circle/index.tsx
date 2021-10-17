import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import colors from '@constants/colors';

const circleSize = 250;
export default function CreditCard({
  }: {
  name: string;
  date: string;
  suffix: number | string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  bgColor?: string;
}) {
  return (
    <View style={[s.container]}>
      <View style={[s.bgCircle, s.rightBgCircle]} />
      <View style={[s.bgCircle, s.bottomBgCircle]} />
      <View style={s.CircleContainer}>
        <View style={s.circle} />
      </View>
      <View style={s.cardNumberContainer} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: 290,
    position: "relative"
  },
  CircleContainer: { position: "relative", marginBottom: 24 },
  circle: { width: 34, height: 94, borderRadius: 17 },
  cardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18
  },
  
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  bgCircle: {
    position: "absolute",
    backgroundColor: colors.light_yellow,
    opacity: .5,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize
  },
  rightBgCircle: {
    top: (-1 * circleSize) / 4,
    right: (-1 * circleSize) / 2
  },
  bottomBgCircle: {
    bottom: (-1 * circleSize) / 2,
    left: (0 * (-1 * circleSize)) / 2
  }
});
