import Link from 'next/link';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          name: 'First API',
          url: 'http://rebilly.github.io/RebillyAPI/openapi.json',
        },
        {
          name: 'Second API',
          url: 'http://rebilly.github.io/RebillyAPI/openapi.json',
        },
        {
          name: 'Third API',
          url: 'http://rebilly.github.io/RebillyAPI/openapi.json',
        },
      ],
    };
  }

  render() {
    const { links } = this.state;
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          position: 'sticky',
          top: 0,
          flexDirection: 'column',
        }}
      >
        {links.map((link) => (
          <div key={link.name} style={{ margin: 5 }}>
            <Link key={link.name} href={`/a?url=${link.url}`}>
              <a>{link.name}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Header;
