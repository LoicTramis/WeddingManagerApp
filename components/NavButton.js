import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const NavButton = ({
    filter,
    setFilter,
    status,
    title,
    name,
    textColor,
    bgColor,
    borderColor,
}) => {
    const [effect, setEffect] = useState({});

    useEffect(() => {
        // Display select effect
        if (filter === status) {
            setEffect({
                backgroundColor: borderColor,
                borderColor: borderColor,
            });
        }
        // Remove select effect
        else {
            setEffect({});
        }
    }, [filter]);

    const handlePress = () => {
        // Clear out filter
        if (filter === status) {
            setFilter("");
        }
        // Set filter
        // Display select effect
        else {
            setFilter(status);
        }
    };
    return (
        <Pressable
            onPress={handlePress}
            style={
                name
                    ? {
                          ...styles.button,
                          backgroundColor: bgColor,
                          borderColor: borderColor,
                          width: 150,
                          ...effect,
                      }
                    : {
                          ...styles.button,
                          width: 100,
                          backgroundColor: bgColor,
                          borderColor: borderColor,
                          ...effect,
                      }
            }>
            <Text style={{ ...styles.text, color: textColor }}>{title}</Text>
            {name && (
                <Text style={{ ...styles.text, color: textColor }}>{name}</Text>
            )}
        </Pressable>
    );
};
const styles = StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        marginHorizontal: 5,
        borderRadius: 4,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "black",
    },
    text: {
        color: "black",
    },
});

export default NavButton;
