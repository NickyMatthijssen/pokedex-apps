export declare type TypeColors = {
    backgroundColor: string;
    textColor: string;
}

const colorObject = (backgroundColor: string, textColor: string): TypeColors => ({
    backgroundColor,
    textColor
});

export function getColorsByType (type: object): TypeColors {
    const name = type.name;

    switch (name) {
        case 'normal':
            return colorObject('bg-normal', 'text-normal');
        case 'fire':
            return colorObject('bg-fire', 'text-fire');
        case 'water':
            return colorObject('bg-water', 'text-water');
        case 'electric':
            return colorObject('bg-electric', 'text-electric');
        case 'grass':
            return colorObject('bg-grass', 'text-grass');
        case 'ice':
            return colorObject('bg-ice', 'text-ice');
        case 'fighting':
            return colorObject('bg-fighting', 'text-fighting');
        case 'poison':
            return colorObject('bg-poison', 'text-poison');
        case 'ground':
            return colorObject('bg-ground', 'text-ground');
        case 'flying':
            return colorObject('bg-flying', 'text-flying');
        case 'psychic':
            return colorObject('bg-psychic', 'text-psychic');
        case 'bug':
            return colorObject('bg-bug', 'text-bug');
        case 'rock':
            return colorObject('bg-rock', 'text-rock');
        case 'ghost':
            return colorObject('bg-ghost', 'text-ghost');
        case 'dragon':
            return colorObject('bg-dragon', 'text-dragon');
        case 'dark':
            return colorObject('bg-dark', 'text-dark');
        case 'steel':
            return colorObject('bg-steel', 'text-steel');
        case 'fairy':
            return colorObject('bg-fairy', 'text-fairy');
        default:
            return colorObject('bg-violet-700', 'text-violet-700');
    }
}