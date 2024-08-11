import {useState} from "react";

//사용자의 클릭이벤트를 받아 Router가 새로운페이지로 이동,url변함
import {Link} from 'react-router-dom';

//js함수내 다른페이지로 이동하기, 주소url를 변경하지 않음 
//import{useNavigate} from 'react-router-dom';



function LoginBox(){

	const [set_id, setId] = useState("");
	const [set_pw, setPw] = useState("");
	

	const onSetId = (e) =>{
		setId(e.target.value)
	};
	const onSetPw = (e) =>{
		setPw(e.target.value)
	};
	

	

	return(
		<div id="loginBox">
			<article>
				<div id="top_visual"></div>
				<ul id="login_wrap">
					<li>
						<label htmlFor="id">
							<span>아이디 </span>
							<input type='text' name='id' value={set_id} onChange={onSetId} placeholder='Username' />
						</label>
					</li>
					<li>
						<label htmlFor="pw">
						<span>비밀번호 </span>
						<input type='password' name='pw' value={set_pw} onChange={onSetPw} placeholder='Password' />
						</label>
					</li>
					
					<button type="submit" class="btn_login">
						<span class="btn_text">로그인</span>
					</button>

					
				</ul>
			
			</article>
		
		<Link to="./Signup"> 가입하기 </Link>
		</div>

		


	);
};
export default LoginBox; 