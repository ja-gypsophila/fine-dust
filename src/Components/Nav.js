import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">지역 전체 보기</Link>
      <Link to="/station">지역 보기</Link>
      <Link to="/favorites">즐겨찾기 보기</Link>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  z-index: 3;
`;
