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
    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }
    getHeroes(): void {
        this.heroService.getHeroSlowly().then(heroes => this.heroes = heroes);
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
                then(hero => {
                    this.heroes.push(hero);
                    this.selectedHero = null;
            })
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
