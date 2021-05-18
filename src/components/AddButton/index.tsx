import React from 'react';
import { FloatingAction } from "react-native-floating-action";
import { connect } from 'react-redux';

class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.actions = [
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
        ]
    }

    handleBtnClick(name) {
        if(name === "bt_copy" && this.props.entities.length > 0){
            this.props.addRandom();
        }
    }

    render() {
        return (
            <FloatingAction
                actions={this.actions}
                onPressItem={this.handleBtnClick}
                color='#00c36d'
            />
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
        addRandom: () => dispatch({ type: "COPY_RANDOM" })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);