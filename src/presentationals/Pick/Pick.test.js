import Pick from './Pick';
import Weapon from '../Weapon/Weapon';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Pick />', () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Pick />);
    })

    it('renders 1 <Weapon />', () => {
        expect(wrapper.find(Weapon)).toHaveLength(1);
    });
});