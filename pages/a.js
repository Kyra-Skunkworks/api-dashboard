import { RedocStandalone } from 'redoc';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const redocOptions = {
  // nativeScrollbars: true,
  // theme: {
  //   colors: {
  //     primary: {
  //       main: "#FF00FF"
  //     },
  //     success: {
  //       main: "#00E000"
  //     },
  //     error: {
  //       main: "#ff0000"
  //     },
  //     warning: {
  //       main: "#DFC350"
  //     },
  //     text: {
  //       primary: "#FF0000",
  //       secondary: "#00FFFF"
  //     },
  //     http: {
  //       get: "#007F00",
  //       put: "#00007F",
  //       post: "#00008F",
  //       delete: "#800000",
  //       options: "#d3ca12",
  //       patch: "#e09d43",
  //       basic: "#999",
  //       link: "#31bbb6",
  //       head: "#c167e4",
  //       main: "#000007",
  //       color: "#0001FE"
  //     }
  //   },
  //   schema: {
  //     typeNameColor: "#8080FF"
  //   },
  //   typography: {
  //     fontFamily: "Arial Narrow, serif",
  //     main: "#990099",
  //     code: {
  //       color: "#0001FE"
  //     },
  //     headings: {
  //       fontFamily: "Garamond, serif",
  //       color: "#FF00FF"
  //     },
  //     links: {
  //       color: "#FFFF00",
  //       visited: "#FFFF00",
  //       hover: "#FFFF00"
  //     }
  //   },
  //   menu: {
  //     backgroundColor: "#000223",
  //     width: "20%"
  //   },
  //   rightPanel: {
  //     backgroundColor: "#000223",
  //     textColor: "#C0C0FF"
  //   }
  // }
};

const Api = (props) => {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <RedocStandalone specUrl={router.query.url} options={redocOptions} />
      </div>
    </Layout>
  );
};

export default Api;
