import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

// Components
import Navbar from '../components/Web/Navbar';
import Footer from '../components/Web/Footer';

const LayoutBasic = (props) => {
  const { routes } = props;

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <Navbar isScrolling={scrollHeight} />
      <LoadRoutes routes={routes} />
      <Footer>
        Footer
      </Footer>
    </>
  );
};

const LoadRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default LayoutBasic;
