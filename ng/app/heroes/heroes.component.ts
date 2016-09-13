/**
 * Created by rohit on 7/9/16.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Hero} from "../hero";
import {HeroService} from "./heroes.service";

@Component({
    selector: 'my-heroes',
    templateUrl:'ng/app/heroes/heroes.component.html',
    styleUrls: ['ng/app/heroes/heroes.component.css'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];
    errorMessage:string;
    mode = "Observable";

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error
        );
    }

    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }

    gotoDetail():void{
        this.router.navigate(['/heroes', this.selectedHero._id]);
    }

    add(name: string, strength: string, is_flying: boolean):void{
        name = name.trim();
        if(name){
            this.heroService.create(name, strength, is_flying).
                subscribe(
                    hero => this.heroes.push(hero),
                    error => this.errorMessage = <any>error
            )
        }
    }

    del(hero:Hero):void{
        this.heroService.del(hero._id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h!= hero);
                if (this.selectedHero == hero){
                    this.selectedHero = null;
                }
            });
    }
}
