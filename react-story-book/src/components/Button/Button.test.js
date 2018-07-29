import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({adapter: new Adapter()});

describe('<Button />', ()=>{
    it('Should return function', ()=>{
        const comp = typeof Button;
        expect(comp).toEqual('function');
    });
    it('Should have default prop name', ()=>{
        const comp = shallow(<Button>Click</Button>);
        expect(comp.props().name).toEqual('Click');
    });
    it('Should have a children as Click Button', ()=>{
        const comp = shallow(<Button>Click Button</Button>);
        expect(comp.props().children).toEqual('Click Button');
    });
    it('Should have a className primary', ()=>{
        const comp = shallow(<Button className="primary">Click</Button>);
        expect(comp.hasClass('primary')).toEqual(true);
    });
});
