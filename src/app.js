//@format
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import indexRoutes from './routes';
import {getAuthRead} from './actions/auth';
import {getSoop} from './actions/soop';

//this component holds global state components which load with page
class App extends React.Component {
  componentDidMount() {
    this.props.actions.getAuthRead.apply();

    var that = this;
    function initialFetch() {
      if (that.props.auth.readAuth) {
        that.props.actions.getSoop.apply(that.props.auth);
      } else {
        setTimeout(initialFetch, 100);
      }
    }

    //wait for auth to occur before inital fetch
    initialFetch();
  }

  render() {
    //console.log(this.props);
    return (
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={'route_' + prop.name + key}
            />
          );
        })}
      </Switch>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    soop: state.soop
  };
}

//i think this shows up as this.props.actions.selectSoop.apply()
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAuthRead: bindActionCreators({apply: getAuthRead}, dispatch),
      getSoop: bindActionCreators({apply: getSoop}, dispatch)
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
