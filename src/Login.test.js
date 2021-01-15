import { render, screen } from '@testing-library/react';
//import LoginTab from './components/Login/Login';
//import thunk from 'redux-thunk';
// import home from './store/reducers/home';
// import posts from './store/reducers/posts';
// import loader from './store/reducers/loader';
import user from './store/reducers/user';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { LoginTab } from './components/Login/Login'

describe('LoginTab', () => {
    it('renders without crashing given the required props', () => {
      const props = {
        userInfo:{

            
                "kind":"t2",
                "data":{
                   "subreddit":{
                      "display_name":"u_Rima",
                      "icon_img":"https://www.redditstatic.com/avatars/avatar_default_08_A06A42.png",
                      "description":"",
                      "link_flair_position":"",
                      "display_name_prefixed":"u/Rima",
                   },
                   "awardee_karma":0,
                   "icon_img":"https://www.redditstatic.com/avatars/avatar_default_08_A06A42.png",
                   "link_karma":11,
                   "total_karma":11,
                   "name":"Rima",
                }
        }
      }
      const wrapper = shallow(<LoginTab {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });
  describe('LoginTab', () => {
    it('renders without crashing given the required props with no data and with error property', 
    () => {
      const props = {
        userInfo:{
          error:'404',
          message:'error occured'
        }
      }
      const wrapper = shallow(<LoginTab {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  });

