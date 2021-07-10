import Button from '../UI/Button/Button';

import classes from './Result.module.css';

const Result = ({ win, onPlayAgain }) => {
    const resultTitle = win ? 'YOU WIN' : 'YOU LOSE';
    return (
        <div className={classes.Result}>
            <span className={classes.ResultTitle}>{resultTitle}</span>
            <Button onClick={onPlayAgain} text='PLAY AGAIN' className='Result' />
        </div>
    );
};

export default Result;