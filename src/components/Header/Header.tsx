import React from "react";
import { HeaderContainer, Title, HeaderIconsContainer } from "./styed";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";
import { AppStore } from "../../store/store";
import { toggleDarkMode } from "../../store/reducers/appReducer";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <HeaderContainer>
      <Title>Weather App</Title>
      <HeaderIconsContainer>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          size={60}
        />
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
