import Link from 'next/link';
import axios from 'axios';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3001/api/list');
      const { data } = res;
      this.setState({ links: data });
    } catch (err) {
      console.error(err);
      alert('Error fetching data from the server:', err);
    }
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
          <div key={link.title} style={{ margin: 5 }}>
            <Link
              key={link.fileName}
              href={`/a?url=http://localhost:3001/api/${link.fileName}`}
            >
              <a>{link.title}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Header;
