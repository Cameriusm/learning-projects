import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            ProjectPlan
          </Link>
          {isLoaded(auth) && links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
