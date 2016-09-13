/**
 * Created by rohit on 7/9/16.
 */

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
    errorMessage: string;

    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.heroService.getHeroes().
            subscribe(
                heroes => this.heroes = heroes.slice(0,4),
                error => this.errorMessage = error
            );
    }

    gotoDetail( hero:Hero ): void{
        let link = ['/heroes', hero._id];
        this.router.navigate(link);
    }
}