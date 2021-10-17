import React from "react";
import { Switch } from "react-native";
import colors from "@constants/colors";

export const SwitchInput = (props) => {
    const { isEnabled, toggleSwitch } = props;
    return (
        <Switch
            trackColor={{ false: colors.blackText, true: colors.yellow }}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}


