import React from 'react';
import Logo from '../../assets/graphics/Logo.png';

const Header = () => {
	return (
		<header>
			<div className="wrap">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
			</div>
		</header>
	)
}

export default Header;
