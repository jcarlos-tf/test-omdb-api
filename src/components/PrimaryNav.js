import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LanguageIcon from "@material-ui/icons/Language";
import GroupIcon from "@material-ui/icons/Group";

class PrimaryNav extends Component {
  state = {
    value: 0,
    pathMap: ["/", "/favorites"],
  };

  componentWillReceiveProps(newProps) {
    const { pathname } = newProps.location;
    const { pathMap } = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value,
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, pathMap } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className="nav primary"
      >
        <BottomNavigationAction
          label="Home"
          icon={<LanguageIcon />}
          component={Link}
          to={pathMap[0]}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<GroupIcon />}
          component={Link}
          to={pathMap[1]}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(PrimaryNav);
