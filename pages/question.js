import axios from 'axios';

import Layout from '../components/Layout';
import ErrorMessage from '../components/ErrorMessage';
import QuestionDetails from '../components/QuestionDetails';

const Question = ({error, details}) => (
  <Layout>
    {
      error
        ? <ErrorMessage />
        : null
    }
    {
      details
        ? <QuestionDetails question={details.question} choices={details.choices} />
        : null
    }
  </Layout>
);

Question.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await axios.get(`https://polls.apiblueprint.org/questions/${id}`);

  if (res.status !== 200) {
    return {
      error: true,
      details: null
    };
  }
  console.log(res.data);
  return {
    error: false,
    details: res.data
  };
};

export default Question;
