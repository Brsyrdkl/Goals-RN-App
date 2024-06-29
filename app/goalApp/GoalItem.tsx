import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

interface GoalItemProps {
    id: string;
    text: string;
    onDelete: (id: string) => void;
}

function GoalItem({ id, text, onDelete }: GoalItemProps) {
    return (
        <Pressable onPress={() => onDelete(id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    },
});
