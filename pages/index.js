import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';

const listContainerStyles = {
  display: 'flex',
  padding: '1%'
};

const Index = (props) => (
  <Layout>
    <div style={listContainerStyles}>
      <QuestionCard />
    </div>
  </Layout>
);

export default Index;
