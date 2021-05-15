import React from 'react';
import logo from './image2.png';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
	
	if(isSignedIn){
		return(

			<nav style={{display:'flex', height:'120px'}}>
				<div className='ma4 mt2'>
					<img alt='logo' src={logo} className='image' />
				</div>
				<p onClick={() => onRouteChange('signin')} className='push f3 dim link black underline pa3 pointer'>Sign Out</p>
			</nav>
		);
	}
	else{
		return(
			<nav style={{display:'flex', height:'120px'}}>
				<div className='ma4 mt2'>
					<img alt='logo' src={logo} className='image' />
				</div>
				<p onClick={() => onRouteChange('signin')}  className='push f3 dim link black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='f3 dim link black underline pa3 pointer'>Register</p>
			</nav>
		);
	}
		

}

export default Navigation;