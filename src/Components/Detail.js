import styled from "styled-components";
import { setSearchSidoName } from "../Redux/Slice/searchSidoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Detail = ({ fetchGetDust, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidoName = () => {
    dispatch(setSearchSidoName(fetchGetDust));
    navigate("/station");
  };

  return (
    <Container>
      <button onClick={() => sidoName()}>{title}</button>
    </Container>
  );
};

export default Detail;

const Container = styled.main``;
