import { useState, useEffect } from 'react';
import * as utils from './BoardUtils/BoardUtils';

import Header from '../../presentationals/Header/Header';
import Weapons from '../../presentationals/Weapons/Weapons';
import Picks from '../../presentationals/Picks/Picks';
import Button from '../../presentationals/UI/Button/Button';
import Modal from '../../presentationals/UI/Modal/Modal';
import Rules from '../../presentationals/Rules/Rules';

import classes from './Board.module.css';

const Board = () => {
    const [score, setScore] = useState(0);
    const [playerWeapon, setPlayerWeapon] = useState('');
    const [comuterWeapon, setComuterWeapon] = useState('');
    const [win, setWin] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [rulesShowing, setRulesShowing] = useState(false);

    useEffect(() => {
        checkStoreScore();
    }, [])

    // If score is stored in local storage, set the stored score in state
    const checkStoreScore = () => {
        const storedScore = localStorage.getItem('score');
        storedScore && setScore(storedScore);
    };

    const onWeaponChoice = weapon => {
        let randWeapon = utils.getRandomWeapon();
        while (randWeapon === weapon) {
            randWeapon = utils.getRandomWeapon();
        }
        setPlayerWeapon(weapon);
        setComuterWeapon(randWeapon);
        const isWin = utils.compare(weapon, randWeapon);
        setWin(isWin)
        setTimeout(() => setScore(prev => {
            const scoreToSet = isWin ? ++prev : prev > 0 ? --prev : 0;
            localStorage.setItem('score', scoreToSet);
            return scoreToSet;
        }), 4000);
        setGameOver(true);
    }

    const onPlayAgain = () => {
        setGameOver(false);
    }

    const showRules = () => {
        setRulesShowing(true);
    }

    const hideRules = () => {
        setRulesShowing(false);
    }

    const game = gameOver ?
        <Picks onPlayAgain={onPlayAgain} win={win} playerWeapon={playerWeapon} computerWeapon={comuterWeapon} /> :
        <Weapons onWeaponChoice={onWeaponChoice} />;

    return (
        <div className={classes.Board}>
            <Header score={score} />
            {game}
            <Button text='RULES' secondary onClick={showRules} className={'ShowRules'} />
            <Modal showing={rulesShowing} onCancel={hideRules}>
                <Rules />
            </Modal>
        </div>
    );
};

export default Board;