import classes from './Button.module.css';

const Button = ({ onClick, text, secondary = false, className = '' }) => {
    const classesToSet = [classes.Button, classes[className]];
    if (secondary) {
        classesToSet.push(classes.Secondary)
    } else {
        classesToSet.push(classes.Prime);
    }

    return (
        <button onClick={onClick} className={classesToSet.join(' ')}>
            <span className={classes.Text}>{text}</span>
        </button>
    );
};

export default Button;