import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputField = ({ title, field, guest, setGuest }) => {
    return (
        <View style={styles.inputCard}>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput
                style={styles.inputField}
                onChangeText={(text) =>
                    setGuest((prev) => {
                        prev[field] = text;
                        return { ...prev };
                    })
                }
                value={guest[field]}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    inputCard: {},
    inputTitle: {
        color: "#ecedee",
        fontWeight: "bold",
    },
    inputField: {
        margin: 10,
        padding: 15,
        fontSize: 20,
        borderRadius: 4,
        backgroundColor: "#3a3f42",
        color: "#ecedee",
    },
});
export default InputField;
