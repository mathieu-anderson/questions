import Poll from './Poll';

const questionPageStyle = {

};

const QuestionDetails = ({question, choices, url}) => {
  return (
    <div style={questionPageStyle}>
      <h1>Question: {question}</h1>
      <Poll choices={choices} url={url} />
    </div>
  );
};

export default QuestionDetails;
