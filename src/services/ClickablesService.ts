import { Clickable, Score } from "@/components/types";

interface ClickablesService {
    getRandomInitialClickables: (colors:string[]) => Clickable[];
    getRandomColors: (numberOfColors:number) => Set<string>;
    getMoveFunction: (length:number) => (x: number) => number;
    computeScore: (score: Score) => number;
}

export default ClickablesService;