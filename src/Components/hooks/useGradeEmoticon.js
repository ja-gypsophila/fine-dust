import { ImHappy, ImNeutral, ImWondering, ImEvil } from "react-icons/im";
import { IconContext } from "react-icons";
// 상태에 따라 이모티콘 설정
const useEmoticon = ({ grade }) => {
  let emoticon;
  let color;

  if (grade <= 1) {
    emoticon = <ImHappy />;
    color = "green";
  } else if (grade >= 2) {
    emoticon = <ImNeutral />;
    color = "blue";
  } else if (grade >= 3) {
    emoticon = <ImWondering />;
    color = "yellow";
  } else if (grade === 4) {
    emoticon = <ImEvil />;
    color = "red";
  } else {
    return null;
  }

  return (
    <IconContext.Provider
      value={{ color, className: "grade-emoticon", size: "1em" }}
    >
      {emoticon}
    </IconContext.Provider>
  );
};

export default useEmoticon;
