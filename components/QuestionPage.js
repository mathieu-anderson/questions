import Poll from './Poll';

const questionPageStyle = {

};

const QuestionPage = (props) => {
  return (
    <div style={questionPageStyle}>
      <h1>Question details</h1>
      <h3>Question: the question text</h3>
      <Poll />
    </div>
  );
};

export default QuestionPage;
