import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import EntityList from './components/EntityList';
import AddButton from './components/AddButton';
import Header from './components/Header';

export default class AppContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <EntityList />
                <AddButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});