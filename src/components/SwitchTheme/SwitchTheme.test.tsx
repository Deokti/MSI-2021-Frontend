import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SwitchTheme } from './index';

describe('SwitchTheme', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}> | React.Component<{}, {}, any>>

  beforeEach(() => {
    wrapper = shallow(<SwitchTheme />)
  });

  it('render component', () => {
    expect(wrapper).not.toBeNull();
  })

  it('SwitchTheme component must contain only span tag', () => {
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('light theme in the SwitchTheme component darkTheme when is false', () => {
    expect(wrapper.find('span.active').length).toEqual(0);
  });

  it('dark theme in the SwitchTheme component darkTheme when is true', () => {
    wrapper = shallow(<SwitchTheme />);
    expect(wrapper.find('span.active').length).toEqual(1);
  });
});