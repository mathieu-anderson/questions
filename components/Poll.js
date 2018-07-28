import React from 'react';
import numeral from 'numeral';
import axios from 'axios';

import ErrorMessage from './ErrorMessage';

const pollStyle = {
  width: '50%',
  textAlign: 'left'
};

const getTotalVotes = choices => {
  return choices
    .map(choice => choice.votes)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};

const getVoteRatio = (votes, totalVotes) => {
  return numeral(votes / totalVotes).format('0.0%');
};

const initialState = {
  error: false,
  hasVoted: false
};

class Poll extends React.Component {
  constructor () {
    super();
    this.state = initialState;
    this.castVote = this.castVote.bind(this);
  }

  async castVote (url) {
    const res = await axios.post(`https://polls.apiblueprint.org${url}`);

    if (res.status !== 201) {
      this.setState({...this.state, error: true});
    }

    this.setState({...this.state, hasVoted: true});
  }

  render () {
    const { choices } = this.props;
    const { error, hasVoted } = this.state;

    return <React.Fragment>
      {
        error
          ? <ErrorMessage />
          : null
      }
      <table style={pollStyle}>
        <tr>
          <th>Choice</th>
          <th>Votes</th>
          <th>%</th>
          <th />
        </tr>
        {
          choices.map(choice => {
            return <tr key={choice.url}>
              <td>{choice.choice}</td>
              <td>{numeral(choice.votes).format()}</td>
              <td>{getVoteRatio(choice.votes, getTotalVotes(choices))}</td>
              <td>
                <button
                  onClick={() => this.castVote(choice.url)}
                  disabled={!!hasVoted}
                >
                  Vote!
                </button>
              </td>
            </tr>;
          })
        }
      </table>
      {
        hasVoted
          ? <h3>Thank you for voting</h3>
          : null
      }
    </React.Fragment>;
  }
}

export default Poll;
