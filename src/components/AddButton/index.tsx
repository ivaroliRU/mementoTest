import React from 'react';
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';

import AddModal from '../AddModal';
import { EntityListState } from '../../state/types';
import { ENITY_LIST_ACTION_TYPES } from '../../state/actions';

interface IState {
    modalVisible: boolean;
}

interface IProps {
    entities: EntityListState;
    addnew: (payload) => void;
}

//possible action buttons
const actions = [
    {
        text: "Add New Entity",
        name: "bt_add",
        position: 1,
        color: '#00c36d'
    },
    {
        text: "Copy Random Entity",
        name: "bt_copy",
        position: 2,
        color: '#00c36d'
    }
];

class AddButton extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {
            modalVisible: false
        }
    }

    //handle action button click
    handleButtonClick(name) {
        if (name === "bt_copy" && this.props.entities.length > 0) {
            let randomEntity = this.props.entities[Math.floor(Math.random() * this.props.entities.length)];
            this.props.addnew({
                Title: randomEntity.Title,
                Subtitle: randomEntity.Subtitle
            });
        }
        else if (name === "bt_add") {
            this.setState({modalVisible: true})
        }
    }

    //handle adding a new entity to the list/reducer
    handleAdd(title, subtitle) {
        if(!title){
            return;
        }
        
        this.props.addnew({
            Title: title,
            Subtitle: subtitle,
            id: uuid.v4()
        });
        this.setState({modalVisible: false})
    }

    render() {
        return (
            <>
                <FloatingAction
                    actions={actions}
                    onPressItem={this.handleButtonClick}
                    color='#00c36d'
                />
                <AddModal 
                    isVisisble={this.state.modalVisible} 
                    toggleModal={() => {this.setState({modalVisible: false})}} 
                    addEntity={(title, subtitle) => {this.handleAdd(title, subtitle)}}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        entities: state.entities,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addRandom: () => dispatch({ type: "COPY_RANDOM" }),
        addnew: (payload) => dispatch({ type: ENITY_LIST_ACTION_TYPES.ADD_ENTITY, payload: payload }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);