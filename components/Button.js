import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ title }) => {
    return (
        <Pressable onPress={null} styles={styles.button}>
            <Text>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 2,
        margin: 1,
        color: "black",
    },
});

export default Button;
