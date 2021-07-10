import Picks from './Picks';
import Pick from '../Pick/Pick';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Picks />', () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Picks />);
    })

    it('renders 2 <Pick />', () => {
        expect(wrapper.find(Pick)).toHaveLength(2);
    })
});