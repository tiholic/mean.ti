import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from "@angular/http";
import {Hero} from "../hero";

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http){ }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(response => response.json().data as Hero[])
                        .catch(this.handleError);
    }
    getHeroSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(
            resolve => setTimeout(resolve, 500)
        ).then(() => this.getHeroes())
    }

    /*getHero(id:number): Promise<Hero>{
        return new Promise<Hero>(
            resolve => setTimeout(resolve, 1000)
        ).then(
            () => this.getHeroes()
                .then(heroes => heroes.find(hero => hero.id === id))
        )
    }*/
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero:Hero):Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }

    create(name:String):Promise<Hero>{
        const url = `${this.heroesUrl}`;
        return this.http.post(url, JSON.stringify({name:name}), {headers:this.headers})
            .toPromise()
            .then( response => response.json().data as Hero )
            .catch(this.handleError)
    }

    del(id:number):Promise<Hero>{
        let url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError)
    }

    private handleError(error:any):Promise<any>{
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    }
}