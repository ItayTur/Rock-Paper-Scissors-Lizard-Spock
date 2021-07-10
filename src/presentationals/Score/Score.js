import classes from './Score.module.css';

const Score = ({ score }) => {
    return (
        <div className={classes.Score}>
            <span className={classes.ScoreTitle}>Score</span>
            <span className={classes.ScoreNumber}>{score}</span>
        </div>
    );
};

export default Score;