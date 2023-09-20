import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RadioStatusField = ({ text, field, value, guest, setGuest }) => {
    return (
        <View>
            <Pressable
                style={
                    guest[field] === value
                        ? {
                              ...styles.radioField,
                              borderColor: "#0954a5",
                          }
                        : {
                              ...styles.radioField,
                          }
                }
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
                <Text style={styles.radioText}>{text}</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    radioField: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 10,
        padding: 15,
        fontSize: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#3a3f42",
        backgroundColor: "#3a3f42",
        color: "#ecedee",
    },
    radioText: {
        marginLeft: "1%",
        color: "#ecedee",
        fontWeight: "bold",
    },
});
export default RadioStatusField;
