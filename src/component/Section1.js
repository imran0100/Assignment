import React from "react";

export default function Section1({ user }) {
  return (
    <div className="section1">
      <img
        alt="profile"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      ></img>
      <div className="userinfo">
        {user.name}
        <p>Username : {user.username}</p>
        <p>Email : {user.email}</p>
        <p>Phone : {user.phone}</p>
        <p>Website : {user.website}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        Company
        <p>Name : {user.company.name}</p>
        <p>Catchphrage : {user.company.catchPhrase}</p>
        <p>bs : {user.company.bs}</p>
      </div>
    </div>
  );
}
