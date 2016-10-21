import React, {PropTypes} from 'react';
import Content from '../components/Main/Content.jsx';
import Products from '../components/Home/Products.jsx';

const Home = (props) => {

  if(props.loading){
    return(<Content isLoading />)
  }
  else{
    return (
      <Content {...props}>
        <Products />
      </Content>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
