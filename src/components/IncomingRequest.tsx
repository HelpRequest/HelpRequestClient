import React from "react";
import "./IncomingRequest.css";
import { Icon } from "@iconify/react";
import { requestAskedType } from "../Types/RequestAskedType";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userById } from "../Redux/reducers/userById";

type Props = {
  help: requestAskedType;
};

export const IncomingRequest = (props: Props) => {
  const { help } = props;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const OfferHelp = () => {
    navigate(`/call/${help.roomId}`);
  };

  return (
    <div className="IncomingRequest-wrapper">
      <div className="info-container">
        <div className="profile-info-container">
          <div className="picture-container">
            <img
              onClick={() => {
                dispatch(userById(help.user));
                navigate(`/profile/${help.user?.uid}`);
              }}
              className="profile-pic"
              src={help.user?.profilePic}
              alt="profile pic"
            ></img>
          </div>
          <div className="info">
            <div className="subject">{help.subject}</div>
            <div
              onClick={() => {
                dispatch(userById(help.user));
                navigate(`/profile/${help.user?.uid}`);
              }}
              className="user"
            >
              by {help.user?.firstName} {help.user?.lastName}{" "}
            </div>
            <div className="stats-container">
              <span className="avg-tip">
                <Icon icon="icon-park-solid:duck" className="duck-icon" />
                <span>20</span>
              </span>
              <span className="avg-score">
                <Icon icon="heroicons-solid:fire" className="fire-icon" />
                <span>4.9</span>
              </span>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button className="accept-button" onClick={OfferHelp}>
            Accept
          </button>
          <button className="decline-button">Decline</button>
        </div>
      </div>
      <div className="IncomingRequest-description">{help.description}</div>
    </div>
  );
};
