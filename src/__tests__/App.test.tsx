// Module Start
// JS Imports
import '../setupTests.ts';
import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';

// App Unit Testing
describe('App unit test', () => {
  test('It renders the chessboard', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
// Module End
