import * as BoardUtils from './BoardUtils';

describe('Board Utils', () => {
    it('Shold check scissors comparisons', () => {
        const scissorsWinPapper = BoardUtils.compare('scissors', 'paper')
        const scissorsWinRock = BoardUtils.compare('scissors', 'rock')
        const scissorsWinSpock = BoardUtils.compare('scissors', 'spock')
        const scissorsWinLizard = BoardUtils.compare('scissors', 'lizard')

        expect(scissorsWinPapper).toBe(true);
        expect(scissorsWinRock).toBe(false);
        expect(scissorsWinSpock).toBe(false);
        expect(scissorsWinLizard).toBe(true);
    });

    it('Shold check paper comparisons', () => {
        const paperWinScissors = BoardUtils.compare('paper', 'scissors')
        const paperWinRock = BoardUtils.compare('paper', 'rock')
        const paperWinSpock = BoardUtils.compare('paper', 'spock')
        const paperWinLizard = BoardUtils.compare('paper', 'lizard')

        expect(paperWinScissors).toBe(false);
        expect(paperWinRock).toBe(true);
        expect(paperWinSpock).toBe(true);
        expect(paperWinLizard).toBe(false);
    });

    it('Shold check rock comparisons', () => {
        const rockWinScissors = BoardUtils.compare('rock', 'scissors')
        const rockWinPaper = BoardUtils.compare('rock', 'paper')
        const rockWinSpock = BoardUtils.compare('rock', 'spock')
        const rockWinLizard = BoardUtils.compare('rock', 'lizard')

        expect(rockWinScissors).toBe(true);
        expect(rockWinPaper).toBe(false);
        expect(rockWinSpock).toBe(false);
        expect(rockWinLizard).toBe(true);
    });

    it('Shold check lizard comparisons', () => {
        const lizardWinScissors = BoardUtils.compare('lizard', 'scissors')
        const lizardWinPaper = BoardUtils.compare('lizard', 'paper')
        const lizardWinSpock = BoardUtils.compare('lizard', 'spock')
        const lizardWinRock = BoardUtils.compare('lizard', 'rock')

        expect(lizardWinScissors).toBe(false);
        expect(lizardWinPaper).toBe(true);
        expect(lizardWinSpock).toBe(true);
        expect(lizardWinRock).toBe(false);
    });

    it('Shold check spock comparisons', () => {
        const spockWinScissors = BoardUtils.compare('spock', 'scissors')
        const spockWinPaper = BoardUtils.compare('spock', 'paper')
        const spockWinLizard = BoardUtils.compare('spock', 'lizard')
        const spockWinRock = BoardUtils.compare('spock', 'rock')

        expect(spockWinScissors).toBe(true);
        expect(spockWinPaper).toBe(false);
        expect(spockWinLizard).toBe(false);
        expect(spockWinRock).toBe(true);
    });
})