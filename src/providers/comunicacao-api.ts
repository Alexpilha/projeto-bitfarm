import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/forkJoin'

const URL_LOGIN = 'http://bitfarm.trade/api/login'
const URL_NEWS = 'http://bitfarm.trade/api/news'
const URL_NEW = 'https://bitfarm.trade/api/new'
const URL_VIDEOS = 'https://bitfarm.trade/api/lives'

@Injectable()
export class ComunicacaoApiProvider {

  constructor(public http: HttpClient) { }
	
	public login(login: string, pass: string): Observable<any> {
		let urlLogin: string = URL_LOGIN + '?login=' + login + '&pass=' + pass;
    return this.http.get(urlLogin);
	}
	
	public getTodosVideos(token: string): Observable<any> {
		let urlVideos: string = URL_VIDEOS + "/" + token;
		return this.http.get(urlVideos);
	}

	public getTodasNoticias(token: string): Observable<any> {
		let urlNoticias: string = URL_NEWS + "/" + token;
		return this.http.get(urlNoticias);
	}

	public getNoticia(token: string, id: any) {
		let urlNoticia: string = URL_NEW + '/' + token + '?id=' + id;
		return this.http.get(urlNoticia);
	}
}