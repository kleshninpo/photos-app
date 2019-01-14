import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { handleLogin } from '../actions/UserActions';

class App extends Component {
  render() {
    const { user, page, getPhotos, handleLogin } = this.props;
    return (
      <div className="App">
        <Page name={user.name} year={page.year} yearsArr={page.yearsArr} photos={page.photos} error={page.error}
              getPhotos={getPhotos} isFetching={page.isFetching}
        />
        <User name={user.name} handleLogin={handleLogin}
              error={user.error} isFetching={user.isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user,
  page: store.page,
});

const mapDispatchToProps = dispatch => ({
  getPhotos: year => dispatch(getPhotos(year)),
  handleLogin: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
