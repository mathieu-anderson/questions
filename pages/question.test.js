/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';

import Question from './question.js';

const defaultProps = {
  error: false,
  details: {
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
};

describe('question.js', () => {
  it('Should render a Layout component', () => {
    const wrapper = shallow(<Question {...defaultProps} />);

    expect(wrapper.find('Layout').length).toEqual(1);
  });

  it('Should not render an ErrorMessage component', () => {
    const wrapper = shallow(<Question {...defaultProps} />);

    expect(wrapper.find('ErrorMessage').length).toEqual(0);
  });

  it('Should render an ErrorMessage component', () => {
    const wrapper = shallow(<Question {...defaultProps} error />);

    expect(wrapper.find('ErrorMessage').length).toEqual(1);
  });

  it('Should render a QuestionDetails component', () => {
    const wrapper = shallow(<Question {...defaultProps} />);

    expect(wrapper.find('QuestionDetails').length).toEqual(1);
  });

  it('Should render a QuestionDetails component', () => {
    const wrapper = shallow(<Question {...defaultProps} details={null} />);

    expect(wrapper.find('QuestionDetails').length).toEqual(0);
  });
});
