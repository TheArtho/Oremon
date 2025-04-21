export type CompactWildOremon = [
    string,       // species
    number,       // level
    boolean,      // shiny
    number,       // size (float ou int représentant un multiplicateur, ex: 1.0)
    boolean?,     // gender (true = male, false = female, undefined = genderless)
    number?       // formId (optionnel)
];