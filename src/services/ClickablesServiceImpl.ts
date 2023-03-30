import { Clickable, Score } from '@/components/types';
import ClickablesService from './ClickablesService';
import allColors from '../data/colors';

class ClickablesServiceImpl implements ClickablesService {
    
    static INITIAL_SCORE: number = 100;

    getRandomInitialClickables = (colors:string[]): Clickable[] => {
        const clickables: Clickable[] = [];
        for (let i = 0; i < 5; i++) {
            clickables.push({
                id: i,
                color: colors[Math.floor(Math.random() * colors.length)],
                isFrozen: false
            });
        }
        if(clickables.every(clickable => clickable.color === clickables[0].color)){
            return this.getRandomInitialClickables(colors);
        }
        return clickables;
    }

    getRandomColors = (numberOfColors:number): string[] => {
        const randomColors: string[] = [];
        for (let i = 0; i < numberOfColors; i++) {
            randomColors.push(allColors[Math.floor(Math.random() * allColors.length)]);
        }
        if(randomColors.every(color => color === randomColors[0])){
            return this.getRandomColors(numberOfColors);
        }
        return randomColors;
    }

    getMoveFunction = (length:number): (x: number) => number => {
        let a = 0;
        do{
            a = Math.floor(Math.random() * 8) + 1;
        }
        while (a%length === 0);
        const moveFunction = (x: number) => (a + x);
        console.log("a is : ", a);
        return moveFunction;
    }

    computeScore = (score: Score): number => {
        console.log("score is : ", score);
        return ClickablesServiceImpl.INITIAL_SCORE - (score.clicks + (8-score.colors)*score.frozen);
    }
 
}

export default ClickablesServiceImpl;