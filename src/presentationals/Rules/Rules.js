import rules from '../../images/image-rules-bonus.svg';

import classes from './Rules.module.css';

const Rules = () => {
    return (
        <div className={classes.Rules}>
            <h3 className={classes.Title}>RULES</h3>
            <img className={classes.RulesImage} src={rules} alt='rules' />
        </div>
    );
};

export default Rules;