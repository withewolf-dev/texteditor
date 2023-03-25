import React from "react";
import { View, ViewProps } from "react-native";

type GapYProps = {
  padding?: number;
} & ViewProps;

const GapY: React.FC<GapYProps> = ({
  children,
  padding = 10,
  style,
  ...rest
}) => {
  return (
    <View style={[{ paddingVertical: padding }, style]} {...rest}>
      {children}
    </View>
  );
};

export default GapY;
