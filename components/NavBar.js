import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import NavButton from "./NavButton";

const NavBar = ({
    number,
    filter,
    setFilter,
    showAddScreen,
    changeOptions,
}) => {
    return (
        <View
            style={
                showAddScreen
                    ? { ...styles.navBar, height: "5%" }
                    : styles.navBar
            }>
            {showAddScreen ? (
                changeOptions ? (
                    <Text style={styles.titleText}>Modifier un invité</Text>
                ) : (
                    <Text style={styles.titleText}>Ajouter un invité</Text>
                )
            ) : (
                <Text style={styles.titleText}>
                    Liste des invités ({number})
                </Text>
            )}
            {!showAddScreen && (
                <>
                    <View style={styles.buttonContainer}>
                        <NavButton
                            filter={filter}
                            setFilter={setFilter}
                            status="pending"
                            title="En attente"
                            textColor="#f0c000"
                            bgColor="#2c2100"
                            borderColor="#705e00"
                        />
                        <NavButton
                            filter={filter}
                            setFilter={setFilter}
                            status="accepted"
                            title="Accepté"
                            textColor="#4cc38a"
                            bgColor="#0f291e"
                            borderColor="#1b543a"
                        />
                        <NavButton
                            filter={filter}
                            setFilter={setFilter}
                            status="rejected"
                            title="Refus"
                            textColor="#f2555a"
                            bgColor="#291415"
                            borderColor="#671e22"
                        />
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.tableContainer}>
                            <NavButton
                                filter={filter}
                                setFilter={setFilter}
                                status="1"
                                title="Table 1"
                                name="Oiseau du paradis"
                                textColor="#9ba1a6"
                                bgColor="#1a1d1e"
                                borderColor="#3a3f42"
                            />
                            <NavButton
                                filter={filter}
                                setFilter={setFilter}
                                status="2"
                                title="Table 2"
                                name="Anthurium"
                                textColor="#9ba1a6"
                                bgColor="#1a1d1e"
                                borderColor="#3a3f42"
                            />
                            <NavButton
                                filter={filter}
                                setFilter={setFilter}
                                status="3"
                                title="Table 3"
                                name="Balisier des caraïbes"
                                textColor="#9ba1a6"
                                bgColor="#1a1d1e"
                                borderColor="#3a3f42"
                            />
                            <NavButton
                                filter={filter}
                                setFilter={setFilter}
                                status="4"
                                title="Table 4"
                                name="Fleur du flamboyant"
                                textColor="#9ba1a6"
                                bgColor="#1a1d1e"
                                borderColor="#3a3f42"
                            />
                            <NavButton
                                filter={filter}
                                setFilter={setFilter}
                                status="5"
                                title="Table 5"
                                name="Hibiscus"
                                textColor="#9ba1a6"
                                bgColor="#1a1d1e"
                                borderColor="#3a3f42"
                            />
                            <NavButton
                                filter={filter}
                                setFilter={setFilter}
                                status="6"
                                title="Table 6"
                                name="Enfant"
                                textColor="#9ba1a6"
                                bgColor="#1a1d1e"
                                borderColor="#3a3f42"
                            />
                        </View>
                    </ScrollView>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        marginTop: "5%",
        height: "22%",
        marginHorizontal: 15,
    },
    titleText: {
        height: "auto",
        fontSize: 32,
        fontWeight: "bold",
        color: "#ecedee",
        textAlign: "center",
    },
    buttonContainer: {
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tableContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflow: "scroll",
    },
    tableCard: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 80,
        marginHorizontal: 5,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#3a3f42",
        backgroundColor: "#1a1d1e",
    },
    tableText: {
        fontWeight: "bold",
        color: "#9ba1a6",
    },
});
export default NavBar;
