import Link from "next/link";
import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          name: "First API",
          url: "http://rebilly.github.io/RebillyAPI/openapi.json"
        },
        {
          name: "Second API",
          url: "http://rebilly.github.io/RebillyAPI/openapi.json"
        },
        {
          name: "Third API",
          url: "http://rebilly.github.io/RebillyAPI/openapi.json"
        }
      ]
    };
  }

  render() {
    const { links } = this.state;
    return (
      <div style={{ width: "100%", display: "flex" }}>
        {links.map(link => (
          <div style={{ margin: 5 }}>
            <Link key={link.name} href={`/api?url=${link.url}`}>
              <a>{link.name}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

// const Header = props => (
//   <div>
//     {props.links.map(link => (
//       <Link href="/p/[id]" as={`/p/`}>
//         <a>{link.name}</a>
//       </Link>
//     ))}
//   </div>
// );

// Header.getInitialProps = async function() {
// get list of APIs
// const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
// const data = res.data;
// console.log(`Show data fetched. Count: ${data.length}`);
// // return {
// //   shows: data.map(entry => entry.show)
// // };
// };

export default Header;
