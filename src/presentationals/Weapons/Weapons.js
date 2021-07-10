import Weapon from '../Weapon/Weapon';

import pentagon from '../../images/bg-pentagon.svg';
import classes from './Weapons.module.css';

const Weapons = ({ onWeaponChoice }) => {
    return (
        <div className={classes.Weapons}>
            <img className={classes.BackgroundImg} src={pentagon} alt='Background' />
            <Weapon onClick={onWeaponChoice} id='paper' />
            <Weapon onClick={onWeaponChoice} id='scissors' />
            <Weapon onClick={onWeaponChoice} id='rock' />
            <Weapon onClick={onWeaponChoice} id='lizard' />
            <Weapon onClick={onWeaponChoice} id='spock' />
        </div>
    );
};

export default Weapons;
