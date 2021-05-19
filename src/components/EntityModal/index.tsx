import React from 'react';
import Modal from 'react-native-modal';
import { SafeAreaView, Text, Button, View } from "react-native";
import { Avatar } from 'react-native-elements';
import { Entity, EntityListState } from '../../state/types';
import { ENITY_LIST_ACTION_TYPES } from '../../state/actions';
import { connect } from 'react-redux';
import styles from './style';

type IProps = {
    entity: Entity
    isVisisble: boolean
    toggleModal: () => void
    removeEntity: (payload: string) => void
};

class EntityModal extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisisble} onBackdropPress={this.props.toggleModal}>
                <SafeAreaView style={styles.container}>
                    <Avatar
                        rounded
                        source={{ uri: "foo.jpg" }}
                        title={(this.props.entity) ? this.props.entity.Title[0] : "N/A"}
                        size={50}
                    />

                    <Text style={styles.title}>Title: {(this.props.entity) ? this.props.entity.Title : ""}</Text>
                    <Text style={styles.subtitle}>Subtitle: {(this.props.entity) ? this.props.entity.Subtitle : ""}</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={this.props.toggleModal} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Remove" onPress={() => {
                                (this.props.entity) ? this.props.removeEntity(this.props.entity.id) : null;
                                this.props.toggleModal();
                            }} />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeEntity: (payload: string) => dispatch({ type: ENITY_LIST_ACTION_TYPES.REMOVE_ENTITY, payload: payload }),
    };
}

const mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityModal);