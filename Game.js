import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import levels from './data';

const Game = ({ onBack, currentLevel, setCurrentLevel }) => {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [hintUsed, setHintUsed] = useState(false);
    const [completedLevels, setCompletedLevels] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (completedLevels.length === levels.length) {
            setGameOver(true);
            setMessage('Поздравляем! Вы прошли все уровни!');
        }
    }, [completedLevels]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    const checkAnswer = () => {
        const currentLevelData = levels[currentLevel];

        if (inputValue === currentLevelData.answer) {
            setMessage('Верно! Переход к следующему уровню.');
            setInputValue('');
            const nextLevel = currentLevel + 1;
            setCurrentLevel(nextLevel);
            if (!completedLevels.includes(nextLevel)) {
                setCompletedLevels([...completedLevels, nextLevel]);
            }
        } else {
            setMessage('Неправильно. Попробуйте еще раз.');
        }
    };

    const showHint = () => {
        if (!hintUsed) {
            setMessage(levels[currentLevel].hint);
            setHintUsed(true);
        } else {
            setMessage('Подсказка уже использована!');
        }
    };

    const goToMenu = () => {
        onBack();
    };

    if (gameOver) {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Text>Меню</Text>
                </TouchableOpacity>
                <Text style={styles.messageText}>{message}</Text>
                <TouchableOpacity style={styles.restartButton} onPress={goToMenu}>
                    <Text>Назад в меню</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (currentLevel >= 0 && currentLevel < levels.length) {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Text>Меню</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hintButton} onPress={showHint}>
                    <Text>Подсказка</Text>
                </TouchableOpacity>
                <Text>{message}</Text>
                <Image style={styles.conditionImage} source={levels[currentLevel].condition} />
                <Text>Ваш ответ: {inputValue}</Text>
                <View style={styles.horizontalButtonContainer}>
                    <TouchableOpacity style={styles.clearCheckButton} onPress={clearInput}>
                        <Text>Очистить</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clearCheckButton} onPress={checkAnswer}>
                        <Text>Проверить</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    {[0, 1, 2, 3, 4].map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={styles.button}
                            onPress={() => handleInputChange(inputValue + number)}>
                            <Text>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.buttonContainer}>
                    {[5, 6, 7, 8, 9].map((number) => (
                        <TouchableOpacity
                            key={number}
                            style={styles.button}
                            onPress={() => handleInputChange(inputValue + number)}>
                            <Text>{number}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Text>Меню</Text>
                </TouchableOpacity>
                <Text>Если вы увидели это сообщение скорее вы прошли все уровни а тепер вам надо сбросить игру но так
                    как игра логическая то сбросить игру не так уже и просто невозможно просто нажать на кнопку начать
                    сначала что игра сбросилось ищите как можно сбросить игру удачи</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width:'100%',
        height:'100vh',
    },
    conditionImage: {
        borderRadius:20,
        marginBottom: 70,
        width: 300,
        height: 300,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
    },
    horizontalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        padding: 25,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    clearCheckButton: {
        alignItems: 'center',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 60,
        justifyContent: 'space-between',
    },
    hintButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'center',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
    },
    menuButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        alignItems: 'center',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
    },
    messageText: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Game;
