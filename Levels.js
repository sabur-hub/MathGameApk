import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import levels from './data';

const Levels = ({ onClose }) => {
    return (
        <View style={styles.levelsContainer}>
            <Text style={styles.title}>Уровни:</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent} vertical>
                <View style={styles.rowContainer}>
                    {levels.map((level, index) => (
                        <View key={index} style={styles.levelContainer}>
                            <Text style={styles.levelText}>{`Уровень ${index + 1}:`}</Text>
                            <Image style={styles.levelImage} source={level.condition} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <TouchableOpacity onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>Закрыть</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    levelsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        padding:30,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    levelContainer: {
        marginRight: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    levelText: {
        fontSize: 18,
        marginBottom: 5,
    },
    levelImage: {
        borderRadius:20,
        width: 150,
        height: 150,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#FF6347',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Levels;
