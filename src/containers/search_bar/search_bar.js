import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (event) => {

    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {

    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  } // render()
} // SearchBar

const mapDispatchToProps = (dispatch) => {

  // makes sure that the action gets to the middleware + reducers
  return bindActionCreators({ fetchWeather }, dispatch); 
};

// 'null' as the first arg because there is no mapStateToProps() function
export default connect(null, mapDispatchToProps)(SearchBar);