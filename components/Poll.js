import React from 'react';
import Router from 'next/router';
import numeral from 'numeral';
import axios from 'axios';

import ErrorMessage from './ErrorMessage';

const pollStyle = {
  width: '50%',
  textAlign: 'left'
};

const placeHolderStyle = {
  minHeight: '3.5em'
};

const getTotalVotes = choices => {
  return choices
    .map(choice => choice.votes)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};

const getVoteRatio = (votes, totalVotes) => {
  return numeral(votes / totalVotes).format('0.0%');
};

class Poll extends React.Component {
  constructor (props) {
    super();
    this.state = {
      error: false,
      hasVoted: false,
      choices: props.choices,
      url: props.url
    };
    this.castVote = this.castVote.bind(this);
  }

  async castVote (choiceUrl, url) {
    const res = await axios.post(`https://polls.apiblueprint.org${choiceUrl}`);

    if (res.status !== 201) {
      this.setState({...this.state, error: true});
    }

    this.setState({...this.state, hasVoted: true});
    Router.push(url);
  }

  render () {
    const { error, hasVoted, choices, url } = this.state;

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
                  onClick={() => this.castVote(choice.url, url)}
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
          : <div style={placeHolderStyle} />
      }
    </React.Fragment>;
  }
}

export default Poll;
