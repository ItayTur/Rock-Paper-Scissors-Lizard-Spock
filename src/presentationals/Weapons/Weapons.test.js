import Weapons from './Weapons';
import Weapon from '../Weapon/Weapon';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Weapons />', () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Weapons />);
    })

    it('renders 5 <Weapon />', () => {
        expect(wrapper.find(Weapon)).toHaveLength(5);
    })
});