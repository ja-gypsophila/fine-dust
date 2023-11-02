import React, { useState } from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavWrapper>
      <button>지역 보기</button>
      <button>전체 보기</button>
      <button>즐겨찾기 보기</button>
    </NavWrapper>
  );
}

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
