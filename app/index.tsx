import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

interface Goal {
    id: string;
    text: string;
    isDeleted: boolean;
}

import GoalItem from './goalApp/GoalItem';
import GoalInput from './goalApp/GoalInput';

function App() {
    const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

    function addGoalHandler(enteredGoalText: string) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() , isDeleted: false}
        ]);
    }

    function deleteGoalHandler(goalId: string) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== goalId);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => {
                        return <GoalItem id={itemData.item.id}
                                         text={itemData.item.text}
                                         onDelete={deleteGoalHandler}
                        />;
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
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
    goalsContainer: {
        flex: 5
    },
});

export default App;