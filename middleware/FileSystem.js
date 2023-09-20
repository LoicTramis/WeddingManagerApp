import * as FileSystem from "expo-file-system";

/////TODO: Create server to upload to
// Make POST request
const uploadGuests = async () => {};

// ///TODO: Change git link to node.js server link
// Make GET request
const downloadGuests = async () => {
    const result = await FileSystem.downloadAsync(
        "https://weddingbs-api-b9550ff9ec4a.herokuapp.com/",
        FileSystem.documentDirectory + "guests.json"
    );
    return result.uri;
};
const readGuests = async () => {
    const fileUri = await downloadGuests();
    const result = await FileSystem.StorageAccessFramework.readAsStringAsync(
        fileUri
    );
};
export { downloadGuests };
