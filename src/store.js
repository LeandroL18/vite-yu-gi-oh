import {reactive} from 'vue'

export const store = reactive({
    charactersList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    archetypeURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArchetype: "",
    archetypeArray: [],
    
    loading: true,

    // parametri per accorciare le api
    // num:20, numero elementi
    // offset:0, indice di partenza
});