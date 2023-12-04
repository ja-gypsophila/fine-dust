import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Nav.css"
import { useEffect, useRef, useState } from "react";
import { MdList } from "react-icons/md";
import { IconContext } from "react-icons";


const Nav = () => {
  const [menu, setMenu] = useState(false)

  const menuRef = useRef(null)

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenu(false)
    }
  };

  useEffect(() => {
    document.addEventListener(`mousedown`, handleClickOutside)

    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside)
    };
  }, [])

  return (
    <div>
      <div ref={menuRef}>
        <NavWrapper>
          <div className={menu ? 'menu' : 'hidden'}>
            {menu ? (
              <div className="menu_contents">
                {menu && (
                  <div>
                    <Link className="nav_allStation" to="/">
                      지역 전체 보기
                    </Link>
                    <Link className="nav_searchStation" to="/station">
                      지역 보기
                    </Link>
                    <Link className="nav_favoritesStation" to="/favorites">
                      즐겨찾기 보기
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden_contents">
                <IconContext.Provider value={{ size: '100%' }}>
                  <MdList onClick={() => setMenu(!menu)} />
                </IconContext.Provider>

              </div>
            )}
          </div>
        </NavWrapper>
      </div>
    </div>
  );
};

export default Nav;

const NavWrapper = styled.div``;

