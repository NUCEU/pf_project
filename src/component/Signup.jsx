import{useState}from "react";
import{Link}from'react-router-dom';

function Signup(){
	const [set_id, setId] = useState("");
	const [set_pw, setPw] = useState("");
	const [name, setName] = useState("");
	const [gender,setGender] = useState("");
	const [birth, setBirth] = useState("");
	const [bio,setBio] = useState("");
	
	const onSetId = (e) =>{
		setId(e.target.value)
	};
	const onSetPw = (e) =>{
		setPw(e.target.value)
	};
	const onChangeName = (e) =>{
		setName(e.target.value)
	};
	const onChangeGender = (e) =>{
		setGender(e.target.value)
	};
	const onChangeBirth = (e) =>{
		setBirth(e.target.value)
	};

	const onChangeBio = (e) =>{
		setBio(e.target.value)
	};
	return(
		<div id="LoginBox">
			<article>
				<div id="top_visual"></div>
				<ul id="login_wrap">
					<li>
						<label htmlFor="id">
							<span>아이디 </span>
						<input type="text" name="id" />
						</label>
					</li>
					<li>
						<label htmlFor="pw">
						<span>비밀번호 </span>
						<input type="password" name="pw" />
						</label>
					</li>
					
					<button type="submit" class="btn_login">
						<span class="btn_text">로그인</span>
					</button>
					
				
					
					<Link to="./Signup.jsx">회원가입 하러가기</Link>
					<button><Link to="./Signup.jsx">회원가입 하러가기</Link></button>
					
				</ul>
			
			</article>
		
			<div className="signUp">
				<input value={set_id} onChange={onSetId} placeholder='아이디' />
				<input value={set_pw} onChange={onSetPw} placeholder='패스워드' />
				<input value={name} onChange={onChangeName} placeholder='이름' />
				<div className="gender">
					<select value={gender} onChange={onChangeGender}>
						<option key={"성별"}></option>
						<option key={"Man"}></option>
						<option key={"Female"}></option>
					</select>
				</div>
				<ul>
					<li><input type="date"  value={birth} onChange={onChangeBirth} /></li>
					<li><textarea value={bio} onChange={onChangeBio} /></li>
				</ul>
			</div>		
		</div>

	);
};
export default Signup;