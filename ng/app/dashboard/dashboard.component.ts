import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../hero";
import {HeroService} from "../heroes/heroes.service";
@Component({
    selector: 'my-dashboard',
    templateUrl: 'ng/app/dashboard/dashboard.component.html',
    styleUrls: ['ng/app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.heroService.getHeroes().
            then(heroes => this.heroes = heroes.slice(1,5))
    }

    gotoDetail( hero:Hero ): void{
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
}