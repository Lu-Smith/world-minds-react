import styled from 'styled-components';

export const HeaderContainer = styled.div<{ $isBlackBackground: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100vw;
  color: white;
  padding: 10px 30px;
  background-color: ${(props) => (props.$isBlackBackground ? 'black' : 'transparent')};

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    font-size: 30px;
    padding-top: 10px;
    color: #668ba4; 

    &:hover {
      color: #781E36;
    }

    @media (max-width: 480px) {
      font-size: 15px;
      padding-top: 0px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.8em;
  text-align: left;
  font-family: "Playwrite US Modern", cursive;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const MenuLink = styled.li<{ $isActive: boolean }>`
  letter-spacing: 1px;
  font-size: 0.8em;
  transition: 400ms all ease-out;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #2b2b91' : 'none')};
  padding-bottom: ${(props) => (props.$isActive ? '10px' : '0')};
  color: ${(props) => (props.$isActive ? 'rgba(250, 250, 250, 0.8)' : 'inherit')};
  
  &:hover {
    border-bottom: 2px solid #2b2b91;
    padding-bottom: 10px;
    color: rgba(250, 250, 250, 0.8);
  }

  &:hover.joinButton {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.7em;
  }

  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled(Menu)<{ open: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    background-color: black;
    width: 100%;
    max-width: 250px;
    padding: 20px;
    transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-150%)')};
    transition: transform 0.3s ease-in-out;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 0 auto;
    }
`;