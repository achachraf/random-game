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
        let max = Math.min(colors.length, 5);
        if(new Set(clickables.map(clickable => clickable.color)).size != max){
            return this.getRandomInitialClickables(colors);
        }

        
        return clickables;
    }

    getRandomColors = (numberOfColors:number): Set<string> => {
        const randomColors: Set<string> = new Set();
        while(randomColors.size < numberOfColors){
            randomColors.add(allColors[Math.floor(Math.random() * allColors.length)]);
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
        return moveFunction;
    }

    computeScore = (score: Score): number => {
        return (ClickablesServiceImpl.INITIAL_SCORE+30*(score.colors-2)) - ((11-score.colors)*score.clicks + (8-score.colors)*score.frozen);
    }
 
}

export default ClickablesServiceImpl;