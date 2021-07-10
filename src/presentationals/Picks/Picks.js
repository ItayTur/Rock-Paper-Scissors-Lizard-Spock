import Pick from '../Pick/Pick';
import Result from '../Result/Result';

import classes from './Picks.module.css';

const Picks = ({ playerWeapon, computerWeapon, win, onPlayAgain }) => {
    return (
        <div className={classes.Picks}>
            <Pick title='YOU PICKED' weapon={playerWeapon} win={win} isPlayer />
            <Result win={win} onPlayAgain={onPlayAgain} />
            <Pick title='THE HOUSE PICKED' weapon={computerWeapon} win={!win} />
        </div>
    );
};

export default Picks;