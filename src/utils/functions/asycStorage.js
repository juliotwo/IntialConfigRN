import AsyncStorage from '@react-native-community/async-storage';

class UseAsyncStorage {
    // Persisting data:
    set = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            return true;
        } catch (error) {
            // Error saving data
            return false;
        }
    };

    // Fetching data:
    get = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) {
            // Error retrieving data
            return error;
        }
    };

    // Removing data:
    remove = async (key) => {
        try {
            const value = await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            // Error retrieving data
            return false;
        }
    };
}

export default new UseAsyncStorage();
