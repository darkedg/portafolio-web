import { Route, Switch } from 'react-router';
import { Col, Layout, Row } from 'antd';

const LayoutBasic = (props) => {
  const { routes } = props;

  return (
    <Layout>
      <Row>
        <Col>
          Menu Navbar
        </Col>
      </Row>
      <LoadRoutes routes={routes} />
      <footer>
        Footer
      </footer>
    </Layout>
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
