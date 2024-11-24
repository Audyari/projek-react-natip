import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Page</Text>
            <Text style={styles.description}>Here are the details you requested:</Text>
            <Text style={styles.detailsText}>This is where you can provide detailed information about the selected item.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f9f9f9', // Light background color
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    description: {
        fontSize: 20,
        color: '#666',
        marginBottom: 12,
    },
    detailsText: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});