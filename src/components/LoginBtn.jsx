import "./LoginBtn.css";

const LoginBtn = ({ inputId, inputPs }) => {
  const onSubmit = () => {
    if (inputId === "dayoung0816" && inputPs === "12345678") {
      alert("로그인에 성공했습니다.");
    } else if (inputId === "" && inputPs === "") {
      alert("내용을 입력하세요.");
    } else {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className="btnWrap">
      <button className="LoginBtn" onClick={onSubmit}>
        Log In
      </button>
    </div>
  );
};

export default LoginBtn;
