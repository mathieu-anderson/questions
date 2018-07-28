import moment from 'moment';

import Link from 'next/link';

const questionCardStyle = {
  padding: '0 1% 1% 1%',
  margin: '1%',
  border: '1px solid #DDD',
  cursor: 'pointer',
  flexGrow: '2'
};

const QuestionCard = ({question, publishedAt, choices, url}) => {
  return (
    <Link href={url}>
      <div style={questionCardStyle}>
        <h2>
          {question}
        </h2>
        <div>
          Published on {moment(publishedAt).format('MMM Do YYYY')}
        </div>
        <div>
          {choices.length} possible choices
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
