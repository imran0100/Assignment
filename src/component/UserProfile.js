import React, { useState, useEffect, useRef } from "react";

export default function UserProfile({ user, logout, navigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logout([]);
  };
  return (
    <div className="navbar">
      <div>{navigate ? navigate : "Profile"}</div>

      <div ref={componentRef} onClick={handleOpen}>
        <div className="userPopUp">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="user"
          />
          <p>{user.name}</p>
        </div>

        {isOpen && (
          <div className="window">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="user"
            />
            <p>{user.name}</p>
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
}
