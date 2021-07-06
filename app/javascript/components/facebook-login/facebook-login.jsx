import propTypes from "prop-types";
import React, { useContext } from "react";
import { LoginButton } from "react-facebook";
import { useHistory } from "react-router";

import { api, userAPI } from "../../api";
import ChildContext from "../../helpers/child-context";
import UserContext from "../../helpers/user-context";
import { getLoginPayload } from "../../helpers/utils";

const FacebookLogin = ({
  title,
  classes,
  handleLoginWhileSignUp,
  type,
  linkId,
}) => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const { setCurrentChild } = useContext(ChildContext);

  const getCurrentEntryWhenUserLogin = async () => {
    const {
      data: { entry },
    } = await api.get("/entries/current");
    setCurrentChild(entry);
  };

  const handleResponse = async (data) => {
    const { code } = getLoginPayload(data);

    const res = await userAPI.get(`/auth/facebook/callback`, {
      params: { code },
    });
    setUser(res.data.user);

    if (handleLoginWhileSignUp) {
      handleLoginWhileSignUp();
    } else {
      getCurrentEntryWhenUserLogin();
    }

    if (type === "login-to-vote") {
      history.push(`/entry/${linkId}/vote`);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const fbScope = "public_profile, email";
  const fbFields =
    "id, first_name, last_name, middle_name, name, picture, email";

  return (
    <LoginButton
      onCompleted={handleResponse}
      onError={handleError}
      reauthorize={true}
      scope={fbScope}
      fields={fbFields}
    >
      <span className={`button button--facebook ${classes}`}>{title}</span>
    </LoginButton>
  );
};

FacebookLogin.propTypes = {
  title: propTypes.string.isRequired,
  classes: propTypes.string.isRequired,
  handleLoginWhileSignUp: propTypes.func,
  type: propTypes.string,
  linkId: propTypes.number,
};

export default FacebookLogin;
