import { StatusBar } from "expo-status-bar";
import uuid from "react-native-uuid";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import AddPage from "./components/AddPage";
import axios from "react-native-axios";
import { ghosts } from "./data/ghosts";

export default function App() {
    const [showAddScreen, setShowAddScreen] = useState(false);
    const [changeOptions, setChangeOptions] = useState(false);
    const [filter, setFilter] = useState("");
    const [guests, setGuests] = useState([]);
    const [guest, setGuest] = useState({
        id: "",
        group: "",
        firstName: "",
        lastName: "",
        isAdult: true,
        status: "",
    });

    useEffect(() => {
        let ignore = false;
        async function getGuests() {
            const response = await axios.get(process.env.SERVER_URL);
            if (!ignore) {
                const json = await response;
                setGuests(json.data);
            }
        }
        getGuests();

        return () => {
            ignore = true;
        };
    }, []);

    useEffect(() => {
        async function uploadGuests() {
            try {
                if (guests.length !== 0) {
                    await axios.post(process.env.SERVER_URL, guests, {
                        headers: {
                            key: process.env.KEY,
                        },
                    });
                }
            } catch (e) {
                console.log("err", e.message);
            }
        }
        uploadGuests();
        // dfj
    }, [guests]);

    const removeGuests = async () => {
        try {
            await axios.post(process.env.SERVER_URL, [], {
                headers: {
                    key: process.env.KEY,
                },
            });
        } catch (error) {
            console.log(e.message);
        }
        setGuests([]);
    };
    const handleChange = (id, firstName, lastName, group, isAdult, status) => {
        setGuest({
            id,
            firstName,
            lastName,
            group,
            isAdult,
            status,
        });
        setShowAddScreen(true);
        setChangeOptions(true);
    };
    /* Item for FlatList */
    const Item = ({ id, firstName, lastName, group, isAdult, status }) => (
        <Pressable
            onLongPress={() => {
                handleChange(id, firstName, lastName, group, isAdult, status);
                setChangeOptions(true);
            }}>
            <View style={styles.itemCard}>
                <View style={styles.infoContainer}>
                    <View style={{ ...styles.itemText, width: "50%" }}>
                        <Text
                            style={{
                                color: "#ecedee",
                                fontSize: 16,
                                fontStyle: "italic",
                            }}>
                            {isAdult ? "Adulte" : "Enfant"}
                        </Text>
                        <Text
                            style={{
                                color: "#ecedee",
                                fontSize: 22,
                            }}>
                            {firstName}&nbsp;
                            {lastName}
                        </Text>
                    </View>
                    {group ? (
                        <Text
                            style={{ ...styles.itemText, fontWeight: "bold" }}>
                            Table {group}
                        </Text>
                    ) : null}
                    <Text style={styles.itemText}>
                        {status === "pending" ? "En attente" : null}
                        {status === "accepted" ? "Accepté" : null}
                        {status === "rejected" ? "Rejeté" : null}
                    </Text>
                </View>
            </View>
        </Pressable>
    );

    // Filter by status or by table (not both)
    const getData = () => {
        if (
            filter === "pending" ||
            filter === "accepted" ||
            filter === "rejected"
        ) {
            return guests.filter((guest) => guest.status === filter);
        } else if (filter) {
            console.log(filter);
            return guests.filter((guest) => guest.group === filter);
        } else {
            return guests;
        }
    };
    return (
        <View style={styles.container}>
            <NavBar
                number={getData().length}
                filter={filter}
                setFilter={setFilter}
                showAddScreen={showAddScreen}
                changeOptions={changeOptions}
            />
            {!showAddScreen ? (
                <View style={styles.listContainer}>
                    <FlatList
                        data={getData()}
                        renderItem={({ item }) => (
                            <Item
                                id={item.id}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                group={item.group}
                                isAdult={item.isAdult}
                                status={item.status}
                            />
                        )}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                    />
                </View>
            ) : (
                <AddPage guest={guest} setGuest={setGuest} />
            )}
            {showAddScreen ? (
                <View style={styles.addButtonContainer}>
                    <Pressable
                        onPress={() => {
                            setShowAddScreen(false);
                            setChangeOptions(true);
                        }}
                        style={styles.button}>
                        <Text style={{ ...styles.text, color: "#9ba1a6" }}>
                            Annuler
                        </Text>
                    </Pressable>
                    {changeOptions ? (
                        <Pressable
                            onPress={() => {
                                // change item with same id
                                const newGuests = guests.map((g) => {
                                    console.log(g.id, guest.id);
                                    if (g.id === guest.id) {
                                        return guest;
                                    } else {
                                        return g;
                                    }
                                });
                                console.log(guest);
                                setGuests(newGuests);
                                setShowAddScreen(false);
                                setChangeOptions(false);
                            }}
                            style={{
                                ...styles.button,
                                backgroundColor: "#10243e",
                                borderColor: "#0a4481",
                            }}>
                            <Text style={{ ...styles.text, color: "#52a9ff" }}>
                                Modifier
                            </Text>
                        </Pressable>
                    ) : (
                        <Pressable
                            onPress={() => {
                                setGuests((prev) => {
                                    if (prev.length !== 0) {
                                        return [
                                            ...prev,
                                            { ...guest, id: uuid.v4() },
                                        ];
                                    } else {
                                        return [{ ...guest, id: uuid.v4() }];
                                    }
                                });
                                setShowAddScreen(false);
                            }}
                            style={{
                                ...styles.button,
                                backgroundColor: "#0f291e",
                                borderColor: "#1b543a",
                            }}>
                            <Text style={{ ...styles.text, color: "#4cc38a" }}>
                                Valider
                            </Text>
                        </Pressable>
                    )}
                </View>
            ) : (
                <View style={styles.addButtonContainer}>
                    <Pressable
                        onLongPress={() => removeGuests()}
                        style={{
                            ...styles.button,
                            backgroundColor: "#391a03",
                            borderColor: "#763205",
                        }}>
                        <Text style={{ ...styles.text, color: "#ff8b3e" }}>
                            Supprimer
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setShowAddScreen(true);
                            setChangeOptions(false);
                            setGuest({});
                        }}
                        style={{
                            ...styles.button,
                            backgroundColor: "#0f291e",
                            borderColor: "#1b543a",
                        }}>
                        <Text style={{ ...styles.text, color: "#4cc38a" }}>
                            Ajouter
                        </Text>
                    </Pressable>
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#151718",
    },
    listContainer: {
        marginTop: 10,
        height: "60%",
        overflow: "scroll",
    },
    itemCard: {
        width: "auto",
        marginHorizontal: 15,
        marginVertical: 5,
        paddingHorizontal: 15,
        padding: 5,
        backgroundColor: "#0c0d0e",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#3a3f42",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemText: {
        marginVertical: 1,
        minWidth: "15%",
        display: "flex",
        alignItems: "flex-start",
        textAlign: "left",
        fontSize: 14,
        color: "#ecedee",
    },
    addButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingRight: "2%",
    },
    button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        height: 50,
        borderRadius: 4,
        borderColor: "#3a3f42",
        borderWidth: 1,
        backgroundColor: "#1a1d1e",
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
