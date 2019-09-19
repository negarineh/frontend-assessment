import React from "react";

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';

import Tabs from './Tabs';

configure({ adapter: new Adapter() });

describe('<Tabs/>', () => {
    describe('render()', () => {
        it('should render the component', () => {
            const wrapper = mount(<Tabs/>);
            wrapper.setState({ list: []});
            assert.equal(wrapper.length, 1);
        });
    });
});
