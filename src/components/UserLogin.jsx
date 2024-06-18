import "./UserLogin.css";
import { useState } from "react";
import LoginBtn from "./LoginBtn";

const UserLogin = () => {
  const [inputId, setInputId] = useState("");
  const [inputPs, setInputPs] = useState("");

  const changeId = (e) => {
    setInputId(e.target.value);
  };

  const changePs = (e) => {
    setInputPs(e.target.value);
  };
  return (
    <div className="inputWrap">
      <div>
        <input
          type="text"
          value={inputId}
          placeholder="아이디"
          onChange={changeId}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputPs}
          placeholder="비밀번호"
          onChange={changePs}
        />
      </div>
      <LoginBtn inputId={inputId} inputPs={inputPs} />
    </div>
  );
};

export default UserLogin;
