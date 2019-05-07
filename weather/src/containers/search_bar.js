import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index'


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: '',
            term: ''
        };
    }

    onSumbit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        const clsName = (this.props.loading) ?
          'btn btn-primary loading' : 'btn btn-primary';
          return (
              <form className='search-bar' onSubmit={event => this.onSumbit(event)}>
                <h1>⇣ 현시각 미세먼지 농도 관측</h1>
                <div className='input-group mb-3'>
                  <input
                    onChange={event => this.setState({term: event.target.value})}
                    type='text' className='form-control' placeholder='도시명을 입력해 주세요.(ex, Seoul)'
                    value={this.state.term}
                    />
                   <div className='input-group-append'>
                     <button className={clsName} type='button'>
                      <i className='fa fa-spinner fa-spin' />
                      <span>Search</span>
                     </button>
                   </div>
                </div>
              </form>
          );
    }
}

function mapStateToProps(state) {
    return { loading: state.weather.loading, error: state.weather.error};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);