import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);

  const [user, setUser] = useState();

  const [selectedChat, setSelectedChat] = useState(null);

  const [profileDetails, setProfileDetails] = useState({});

  const [isSearchOpen, setSearchOpen] = useState(false);

  const [chatLoading, setChatLoading] = useState(false);

  const [isGroupOpen, setGroupOpen] = useState(false);

  const [isProfileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    let userInfo;
    if ((userInfo = JSON.parse(localStorage.getItem("user")))) {
      setUser(userInfo);
      navigate("/chats");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Context.Provider
      value={{
        chats,
        setChats,
        user,
        setUser,
        isSearchOpen,
        setSearchOpen,
        isProfileOpen,
        setProfileOpen,
        selectedChat,
        setSelectedChat,
        profileDetails,
        setProfileDetails,
        isGroupOpen,
        setGroupOpen,
        chatLoading,
        setChatLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
