/**
 * Created by rohit on 7/9/16.
 */

import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Hero} from "../hero";
import {HeroService} from "../heroes/heroes.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'ng/app/hero-detail/hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;
    errorMessage: String;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){

    }

    ngOnInit(): void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).
                subscribe(
                    hero => this.hero = hero,
                    error => this.errorMessage = <any>error
                );
        });
    }

    goBack(): void{
        window.history.back();
    }

    save(): void{
        this.heroService.update(this.hero)
            .then(this.goBack)
    }
}