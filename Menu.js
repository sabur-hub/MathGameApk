import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Menu = ({ onStartGame, onShowLevels, onShowAbout, onResetGame }) => {
    const scaleValue = React.useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.menuContainer}>
            <View style={styles.buttonsContainer}>
                <Animated.View
                    style={[
                        styles.buttonContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}>
                    <TouchableOpacity
                        onPress={onStartGame}
                        style={styles.button}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <Text style={styles.buttonText}>Начать игру</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.buttonContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}>
                    <TouchableOpacity
                        onPress={onShowLevels}
                        style={styles.button}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <Text style={styles.buttonText}>Уровни</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.buttonContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}>
                    <TouchableOpacity
                        onPress={onShowAbout}
                        style={styles.button}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <Text style={styles.buttonText}>Об авторе</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View
                    style={[
                        styles.buttonContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}>
                    <TouchableOpacity
                        onPress={onResetGame}
                        style={styles.button}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <Text style={styles.buttonText}>Начать сначала</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '80%',
        height: '60%',
        alignItems: 'stretch', // Устанавливаем, чтобы элементы контейнера растягивались по высоте
    },
    buttonContainer: {
        marginVertical: 5,
        flex: 1, // Растягиваем контейнер кнопки по всей высоте контейнера кнопок
    },
    button: {
        backgroundColor: '#FF6347',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%', // Устанавливаем одинаковую ширину для кнопки
        height: '50%', // Устанавливаем одинаковую высоту для кнопки
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default Menu;
