import axios from 'axios';

import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';

const listContainerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  padding: '1%'
};

const Index = ({questions, error}) => (
  <Layout>
    <div style={listContainerStyles}>
      {
        error
          ? <h2>There was an error while fetching the data. Please reload the page.</h2>
          : null
      }
      {
        questions
        ? questions.map(({published_at, url, choices, question}) => (
          <QuestionCard
            publishedAt={published_at}
            url={url}
            choices={choices}
            question={question}
          />
        ))
        : null
      }
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await axios.get(`https://polls.apiblueprint.org/questions`);

  if (res.status !== 200) {
    return {
      error: true,
      questions: null
    };
  }

  return {
    error: false,
    questions: res.data
  };
};

export default Index;
