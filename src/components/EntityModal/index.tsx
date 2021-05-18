import React from 'react';
import Modal from 'react-native-modal';
import { SafeAreaView, Text, Button, View } from "react-native";
import { Entity } from '../../state/types';
import styles from './style';

type IProps = {
    entity: Entity
    isVisisble: boolean
    toggleModal: () => void
};

class EntityModal extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisisble} onBackdropPress={this.props.toggleModal}>
                <SafeAreaView style={styles.container}>
                    <Text>Title: {(this.props.entity)?this.props.entity.Title:""}</Text>
                    <Text>Subtitle: {(this.props.entity)?this.props.entity.Subtitle:""}</Text>
                    <View style={styles.button}>
                            <Button title="Cancel" onPress={this.props.toggleModal} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Remove" onPress={() => this.props.toggleModal} />
                        </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

export default EntityModal;