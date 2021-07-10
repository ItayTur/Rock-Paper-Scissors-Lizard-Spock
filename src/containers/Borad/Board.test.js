import Board from './Board';
import Weapons from '../../presentationals/Weapons/Weapons';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Board />', () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Board />);
    })

    it('renders 1 <Weapons />', () => {
        expect(wrapper.find(Weapons)).toHaveLength(1);
    });
});