import Link from 'next/link';

const questionCardStyle = {
  padding: '0 1% 1% 1%',
  border: '1px solid #DDD',
  cursor: 'pointer'
};

const QuestionCard = (props) => {
  return (
    <Link href='/question'>
      <div style={questionCardStyle}>
        <h2>
          Question title
        </h2>
        <div>
          Published on 10.10.2018
        </div>
        <div>
          6 possible choices
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
