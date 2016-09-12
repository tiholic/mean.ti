/**
 * Created by rohit on 7/9/16.
 */

import {InMemoryDbService} from "angular2-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let heroes = [
            { id: 11, name: 'Mr. Nice', strength: 'being nice', is_flying: false },
            { id: 12, name: 'Narco', strength: 'cigar', is_flying: false },
            { id: 13, name: 'Bombasto', strength: 'blast', is_flying: true },
            { id: 14, name: 'Celeritas', strength: 'rita', is_flying: false },
            { id: 15, name: 'Magneta', strength: 'color', is_flying: false },
            { id: 16, name: 'RubberMan', strength: 'expandable', is_flying: true },
            { id: 17, name: 'Dynama', strength: 'bonb', is_flying: false },
            { id: 18, name: 'Dr IQ', strength: 'Intelligence', is_flying: true },
            { id: 19, name: 'Magma', strength: 'Hot', is_flying: false },
            { id: 20, name: 'Tornado', strength: 'shatter', is_flying: true }
        ];

        return {heroes};
    }
}