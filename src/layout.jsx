import Header from "./components/header/header.jsx";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
      <>
        <Header />
          
        <main>{children}</main>
        
      </>
    );
  };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;