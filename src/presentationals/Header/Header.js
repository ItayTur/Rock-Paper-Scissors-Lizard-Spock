import Score from '../Score/Score';

import logo from '../../images/logo-bonus.svg';

import classes from './Header.module.css';

const Header = ({ score }) => {
    return (
        <div className={classes.Header}>
            <img className={classes.Logo} src={logo} alt={'game logo'} />
            <Score score={score} />
        </div>
    )
};

export default Header;