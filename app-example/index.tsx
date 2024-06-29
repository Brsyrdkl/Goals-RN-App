import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

interface Goal {
    id: string;
    text: string;
}

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState<string>('');
    const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() }
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <Button
                    title="Add Goal"
                    onPress={addGoalHandler}
                />
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal) => (
                    <Text style={styles.goalItem} key={goal.id}>{goal.text}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    }
});
