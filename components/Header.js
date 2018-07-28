import Link from 'next/link';

const linkStyle = {
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#DDD'
};

const headerStyle = {
  borderBottom: '1px solid #DDD',
  padding: '1%',
  fontSize: '3em;'
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <Link href='/'>
        <a style={linkStyle}>home</a>
      </Link>
    </div>
  );
};

export default Header;
