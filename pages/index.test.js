/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Index from './index.js';

const defaultProps = {
  error: false,
  questions: [
    {
      'question': 'Favourite programming language?',
      'published_at': '2014-11-11T08:40:51.620Z',
      'url': '/questions/1',
      'choices': [
        {
          'choice': 'Swift',
          'url': '/questions/1/choices/1',
          'votes': 2048
        },
        {
          'choice': 'Python',
          'url': '/questions/1/choices/2',
          'votes': 1024
        },
        {
          'choice': 'Objective-C',
          'url': '/questions/1/choices/3',
          'votes': 512
        },
        {
          'choice': 'Ruby',
          'url': '/questions/1/choices/4',
          'votes': 256
        }
      ]
    }
  ]
};

describe('index.js', () => {
  it('Should render a Layout component', () => {
    const wrapper = shallow(<Index {...defaultProps} />);

    expect(wrapper.find('Layout').length).toEqual(1);
  });

  it('Should not render an ErrorMessage component', () => {
    const wrapper = shallow(<Index {...defaultProps} />);

    expect(wrapper.find('ErrorMessage').length).toEqual(0);
  });

  it('Should render an ErrorMessage component', () => {
    const wrapper = shallow(<Index {...defaultProps} error />);

    expect(wrapper.find('ErrorMessage').length).toEqual(1);
  });

  it('Should render a QuestionCard component', () => {
    const wrapper = shallow(<Index {...defaultProps} />);

    expect(wrapper.find('QuestionCard').length).toEqual(1);
  });

  it('Should render a QuestionCard component', () => {
    const wrapper = shallow(<Index {...defaultProps} questions={null} />);

    expect(wrapper.find('QuestionCard').length).toEqual(0);
  });
});
