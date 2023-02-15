import React, { useState } from "react";
import ComingSoon from "./ComingSoon";

import Section1 from "./Section1";
import Section2 from "./Section2";
import UserProfile from "./UserProfile";

export default function Profile({ user, logout }) {
  const [nav, setNav] = useState("Profile");
  console.log(nav);
  /* <div onClick={handle}>
    {user.name}
    </div>*/
  return (
    <div className="profile">
      <div className="sidebar">
        <div onClick={() => setNav("Profile")}>Profile</div>

        <div onClick={() => setNav("Post")}>Post</div>

        <div onClick={() => setNav("Gallery")}>Gallery</div>
        <div onClick={() => setNav("To-Do")}>To-Do</div>
      </div>

      <UserProfile user={user} logout={logout} navigate={nav} />

      {nav !== "Profile" ? <ComingSoon /> : <Section1 user={user} />}
      {nav !== "Profile" ? null : <Section2 user={user} />}
      {/* <div className="Chats">
        <div>
          <p>Chats</p>
        </div>
        <div>Ope</div>
      </div> */}
      <div className="bchat">
        <div className="Chats">
          <div>
            <p>Chats</p>
          </div>
          <div>Open</div>
        </div>
      </div>
    </div>
  );
}
