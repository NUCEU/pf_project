import {Link} from 'react-router-dom';
//import {Routes, Route, Link} from 'react-router-dom';

function Menu(){
	return(
		<article>
			<ul>
			
				<li><a href=" ">	<Link to="/">Go develop space</Link></a></li>
				<li><button>Go special shopping</button></li>
			</ul>
		</article>
	)
}

export default Menu();