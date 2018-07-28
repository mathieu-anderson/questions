import Header from './Header';

const layoutStyle = {
  margin: '5% 15% 5% 15%',
  padding: '1%',
  border: '1px solid #DDD',
  fontFamily: 'sans-serif'
};

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
