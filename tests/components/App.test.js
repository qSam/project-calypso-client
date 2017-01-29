import App from '../../src/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

it('App Component Test', () => {
  shallow(<App />);
});
