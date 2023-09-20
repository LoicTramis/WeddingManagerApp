import React from "react";
import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RadioStatusField = ({ text, field, value, guest, setGuest }) => {
    return (
        <View>
            <Pressable
                onPress={() =>
                    setGuest((prev) => {
                        prev[field] = value;
                        return { ...prev };
                    })
                }>
                {guest[field] === value ? (
                    <MaterialIcons
                        name="radio-button-on"
                        size={36}
                        color="#0954a5"
                    />
                ) : (
                    <MaterialIcons
                        name="radio-button-off"
                        size={36}
                        color="#3a3f42"
                    />
                )}
                <Text>{text}</Text>
            </Pressable>
        </View>
    );
};

export default RadioStatusField;
