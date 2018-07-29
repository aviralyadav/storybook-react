import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectBox from './SelectBox';

configure({ adapter: new Adapter() });

const selectOptions = [
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 }
];
const props = {
    handleChange: jest.fn()
  };
describe('<SelectBox />', () => {
    it('Should return a function', () => {
        const comp = typeof SelectBox;
        expect(comp).toEqual('function');
    });
    it('Should return a prop placeholder', () => {
        const comp = shallow(<SelectBox options={selectOptions} placeholder={'Select'} />);
        expect(comp.props().placeholder).toEqual('Select');
    });
    it('Should return a state value', () => {
        const comp = mount(<SelectBox options={selectOptions} />);
        const wrapper = comp.childAt(0).instance();
        wrapper.setState({ name: 'hello' })
        expect(wrapper.state.name).toEqual('hello');
    });
    it('Should change value on click of onChange function', () => {
        const comp = mount(<SelectBox {...props} options={selectOptions} />);
        comp
            .find('Select')
            .at(0)
            .props()
            .onChange({ target: { value: 20 } });
        // console.log(comp.childAt(0).instance());
        expect(props.handleChange).toHaveBeenCalled();
    });
});