import React from "react";
import { NavLink } from "react-router-dom";
import * as s from "./User.module.css";

const User = (props) => {
  return (
    <>
      <div>
        <div className={s.users}>
          <div className={s.user}>
            <NavLink to={"/profile/" + props.users.id}>
              <img
                className={s.profileImage}
                src={
                  props.users.photos.large != null
                    ? props.users.photos.large
                    : "https://i.pinimg.com/280x280_RS/e8/a2/3f/e8a23f5fa948f7b3bd81d99119314e00.jpg"
                }
              />
            </NavLink>

            <div className={s.userName}>{props.users.name}</div>
            <div>
              {props.users.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id == props.users.id
                  )}
                  onClick={() => {
                    props.setUnfollow(props.users.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id == props.users.id
                  )}
                  onClick={() => {
                    props.setFollow(props.users.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={s.userDescription}>
          <div className={s.status}>{"props.users.status"}</div>
          <div className={s.location}>{"props.users.location"}</div>
        </div>
      </div>
    </>
  );
};

export default User;
