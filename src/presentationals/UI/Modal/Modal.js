import { memo } from 'react';

import Backdrop from '../Backdrop/Backdrop';

import close from '../../../images/icon-close.svg';

import classes from './Modal.module.css';

const Modal = ({ showing, onCancel, children }) => {
    return (
        <>
            <Backdrop showing={showing} onClick={onCancel} />
            <div
                className={classes.Modal}
                style={{
                    transform: showing ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: showing ? '1' : '0'
                }}>
                {children}
                <button className={classes.Close} onClick={onCancel}>
                    <img src={close} alt='close' />
                </button>
            </div>
        </>
    );
}

const areEqual = (prevProps, nextProps) => prevProps.showing === nextProps.showing;

export default memo(Modal, areEqual);