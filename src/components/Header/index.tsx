import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Entity Editor</Text>
                <Text style={styles.headerSubtitle}>This might be the best app on the market</Text>
            </View>
        );
    }
}