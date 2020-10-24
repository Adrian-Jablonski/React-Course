import React from 'react';
import Logo from '../../assets/graphics/Logo.png';

const Header = () => {
	return (
		// data-test attribute could be used to tell other devs to not change the value because it is used in tests
		<header data-test="header-component">
			<div className="wrap">
				<div className="logo">
					<img className="logo-img" src={Logo} alt="logo" />
				</div>
			</div>
		</header>
	)
}

export default Header;
