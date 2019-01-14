import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
  renderTemplate = () => {
    const{ name, isFetching, error } = this.props;

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (error) {
      return <p className='error'>Невозможно загрузить данные</p>;
    }

    if (name) {
      return <p>Привет, {name}!</p>;
    } else {
      return <button className='btn' onClick={this.props.handleLogin}>Войти</button>;
    }
  };

  render() {
    console.log('User render');
    return <div>{this.renderTemplate()}</div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
