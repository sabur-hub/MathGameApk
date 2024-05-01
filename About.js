import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const About = ({ onClose }) => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.title}>Информация об авторов:</Text>
            <Text style={styles.text}>Имена: Сангинов Абубакр и Норов Абдусабур</Text>
            <Text style={styles.text}>Email: saburnorov@gmail.com</Text>
            <TouchableOpacity onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>Закрыть</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#FF6347',
        padding: 10,
        marginTop: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 16,
    },
});

export default About;
