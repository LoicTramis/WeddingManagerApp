import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import InputField from "./InputField";
import RadioField from "./RadioField";

const AddPage = ({ guest, setGuest }) => {
    return (
        <View style={styles.inputContainer}>
            <ScrollView>
                <InputField
                    title="Prénom"
                    field="firstName"
                    guest={guest}
                    setGuest={setGuest}
                />
                <InputField
                    title="Nom"
                    field="lastName"
                    guest={guest}
                    setGuest={setGuest}
                />
                <InputField
                    title="Table"
                    field="group"
                    guest={guest}
                    setGuest={setGuest}
                />
                <Text style={styles.radioTitle}>Majorité</Text>
                <RadioField
                    text="Adulte"
                    field="isAdult"
                    value={true}
                    guest={guest}
                    setGuest={setGuest}
                />
                <RadioField
                    text="Enfant"
                    field="isAdult"
                    value={false}
                    guest={guest}
                    setGuest={setGuest}
                />
                <Text style={styles.radioTitle}>Statut</Text>
                <RadioField
                    text="En attente"
                    field="status"
                    value="pending"
                    guest={guest}
                    setGuest={setGuest}
                />
                <RadioField
                    text="Accepté"
                    field="status"
                    value="accepted"
                    guest={guest}
                    setGuest={setGuest}
                />
                <RadioField
                    text="Rejeté"
                    field="status"
                    value="rejected"
                    guest={guest}
                    setGuest={setGuest}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 15,
        backgroundColor: "#0c0d0e",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#3a3f42",
        height: "75%",
    },
    radioTitle: {
        color: "#ecedee",
        fontWeight: "bold",
    },
});

export default AddPage;
