/**
 * Created by rohit on 7/9/16.
 */

import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, Http, Response } from "@angular/http";
import { Hero } from "../hero";
import { Observable } from 'rxjs/Observable'

@Injectable()
export class HeroService {

    private heroesUrl = '/api/heroes';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http){ }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body.data || {};
    }

    getHero(id: number): Observable<Hero> {
        return this.getHeroes()
            .map(heroes => heroes.find(hero => hero.id === id))
            .catch(this.handleError);
    }

    update(hero:Hero):Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }

    create(name:String):Observable<Hero>{
        const url = `${this.heroesUrl}`;
        return this.http.post(url, JSON.stringify({name:name}), {headers:this.headers})
            .map(this.extractData)
            .catch(this.handleError)
    }

    del(id:number):Promise<Hero>{
        let url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError)
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}