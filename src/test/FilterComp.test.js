import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { FilterComp } from '../components/FilterComp/FilterComp'
import { Box, Avatar, Button } from '@material-ui/core';

describe('FilterComp', () => {

  it('renders 5 buttons', () => {
    const wrapper = shallow(<FilterComp />);
    expect(wrapper.find(<Button></Button>)).to.have.lengthOf(5);
  });
});


