import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Route,Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { NotificationContainer } from "Components/ReactNotifications";
import { defaultStartPath } from "Constants/defaultValues";

import AppLocale from "../lang";
import MainRoute from "Routes";
import error from "Routes/error";

import "Assets/css/vendor/bootstrap.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "Assets/css/sass/themes/gogo.light.purple.scss";
/*
color options : 
	 'light.purple'		'dark.purple'
	 'light.blue'		'dark.blue'
	 'light.green'		'dark.green'
	 'light.orange'		'dark.orange'
	 'light.red'		'dark.red'
*/

class App extends Component {
  render() {
    const { location, match, locale } = this.props;
    const currentAppLocale = AppLocale[locale];
	if (location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') {
		return (<Redirect to={defaultStartPath} />);
	}
    return (
      <Fragment>
        <NotificationContainer />
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <Fragment>
            <Switch>
              <Route path={`${match.url}app`} component={MainRoute} />
              <Route path={`/error`} component={error} />
              <Redirect to="/error" />
            </Switch>
          </Fragment>
        </IntlProvider>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};

export default connect(
  mapStateToProps,
  {}
)(App);
