import React, { Component } from 'react';
import SelectBox from '../SelectBox/SelectBox';

class Select extends Component {
    state = { name: '', age: ''}
    handleChange = event => {
        // console.log(event);
       this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const selectOptions = [
            {name: 'One', value: 1},
            {name: 'Two', value: 2},
            {name: 'Three', value: 3}
          ];
        return (
            <SelectBox value={this.state.age} handleChange={this.handleChange} options={selectOptions} />
        );
    }
}

export default Select;