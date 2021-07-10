import Weapon from './Weapon';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Weapon />', () => {

    it('allows to set id', () => {
        const wrapper = mount(<Weapon id="paper" />);
        expect(wrapper.props().id).toEqual('paper');
        wrapper.setProps({ id: 'rock' });
        expect(wrapper.props().id).toEqual('rock');
      });
});