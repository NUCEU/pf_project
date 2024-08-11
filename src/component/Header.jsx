//import {Link} from 'react-router-dom';

function Header(){
	const title = 'CUTE_PERSON';
	
	return(
		<header>
		
			<h1 id="logo">{title}</h1>
			<div id="gnb">
				<ul className="depth_1">
					<li className="Menu"><a href="./Menu.js">MENU</a> 
						<ul className="depth_2">
							<li><a href="./Space.js">Space</a></li>
							<li><a href="./OtherProject.js">OtherProject</a></li>
						</ul>
					</li>
					<li><a href="./About.js">ABOUT</a></li>
					<li><a href="./Shop.js">SHOP</a></li>
					<li><a href="./Contact.js">CONTACT</a></li>
				</ul>
			</div>
		</header>
	);
}
export default Header;