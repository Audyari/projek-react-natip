import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TestScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test Screen</Text>
            <Text style={styles.subtitle}>Choose an option below:</Text>

            <TouchableOpacity style={styles.linkButton}>
                <Link href="/details" style={styles.link}>View Details</Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton}>
                <Link href="/" style={styles.link}>Back to Home</Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#e6f7ff', // Light background color
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333', // Darker text color
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: '#666', // Lighter text color
        marginBottom: 24,
    },
    linkButton: {
        marginVertical: 10,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#007bff', // Button background color
        width: '80%', // Button width
        alignItems: 'center',
    },
    link: {
        color: '#fff', // Text color for the link
        fontSize: 18,
        fontWeight: '600',
    },
});