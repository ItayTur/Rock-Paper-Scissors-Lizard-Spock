import classes from './Backdrop.module.css';

const Backdrop = ({ showing, onClick }) => (
    showing ? <div className={classes.Backdrop} onClick={onClick}></div> : null
);

export default Backdrop;