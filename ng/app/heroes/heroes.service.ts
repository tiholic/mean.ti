/**
 * Created by rohit on 7/9/16.
 */

import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, Http, Response, RequestOptions } from "@angular/http";
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

    getHero(id: string): Observable<Hero> {
        return this.getHeroes()
            .map(heroes => heroes.find(hero => hero._id === id))
            .catch(this.handleError);
    }

    update(hero:Hero):Promise<Hero>{
        const url = `${this.heroesUrl}/${hero._id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }

    create(name: String, strength: String, is_flying: boolean):Observable<Hero>{
        let body = JSON.stringify({name, strength, is_flying});
        const url = `${this.heroesUrl}`;
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    del(id:String):Promise<Hero>{
        let url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError)
    }

    private extractData(res: Response){
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}