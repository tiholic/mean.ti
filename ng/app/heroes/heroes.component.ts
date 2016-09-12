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
    errorMessage:String;
    mode = "Observable";

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error
        );
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }

    gotoDetail():void{
        this.router.navigate(['/heroes', this.selectedHero.id]);
    }

    add(name: String):void{
        name = name.trim();
        if(name){
            this.heroService.create(name).
                subscribe(
                    hero => {
                    this.heroes.push(hero);
                    this.selectedHero = null;
                    },
                    error => this.errorMessage = <any>error
            )
        }
    }

    del(hero:Hero):void{
        this.heroService.del(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h!= hero);
                if (this.selectedHero == hero){
                    this.selectedHero = null;
                }
            });
    }
}
