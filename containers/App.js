import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SimpleForm from '../forms/SimpleForm';

class App extends Component {
  handleSubmit = (data) => {
    const { dispatch } = this.props;
    console.log('App\'s handleSubmit');
    console.log(data);
  };

  render() {
    return (
      <div>
        <SimpleForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(
  mapStateToProps
)(App)

