import paper from '../../images/icon-paper.svg';
import rock from '../../images/icon-rock.svg';
import scissors from '../../images/icon-scissors.svg';
import lizard from '../../images/icon-lizard.svg';
import spock from '../../images/icon-spock.svg';

import classes from './Weapon.module.css';

const weaponAttrs = {
    paper: { className: `${classes.Weapon} ${classes.Paper}`, imgSrc: paper, alt: 'paper' },
    rock: { className: `${classes.Weapon} ${classes.Rock}`, imgSrc: rock, alt: 'rock' },
    scissors: { className: `${classes.Weapon} ${classes.Scissors}`, imgSrc: scissors, alt: 'scissors' },
    lizard: { className: `${classes.Weapon} ${classes.Lizard}`, imgSrc: lizard, alt: 'lizard' },
    spock: { className: `${classes.Weapon} ${classes.Spock}`, imgSrc: spock, alt: 'spock' },
};


const Weapon = ({ id, onClick, classNames = [] }) => {
    const { className, imgSrc, alt } = weaponAttrs[id];
    const classesToSet = classNames.length ?
        classNames.reduce((res, current) => `${res} ${classes[current]}`, className) :
        className;

    return (
        <div className={classes.WeaponContainer}>
            <button onClick={() => onClick && onClick(id)} className={classesToSet}>
                <img className={classes.Icon} src={imgSrc} alt={alt} />
            </button>
        </div>
    );
};

export default Weapon;