import Weapon from '../Weapon/Weapon';

import classes from './Pick.module.css';

const Pick = ({ title, weapon, win, isPlayer }) => {

    const classNames = ['InPick', win ? 'Win' : null, isPlayer ? 'Player' : null];

    return (
        <div className={classes.Pick}>
            <span>{title}</span>
            <Weapon id={weapon} classNames={classNames} />
        </div>
    );
};

export default Pick;