import Poll from './Poll';

const questionPageStyle = {

};

const QuestionDetails = ({question, choices}) => {
  return (
    <div style={questionPageStyle}>
      <h1>Question: {question}</h1>
      <Poll choices={choices} />
    </div>
  );
};

export default QuestionDetails;
