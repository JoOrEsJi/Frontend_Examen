import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
    providedIn: 'root'
})
 export class MessageService {
    private apiUrl = 'http://localhost:3000/api/messages';

    constructor(private http: HttpClient) { }

    create(message: Partial<Message>): Observable<Message> {
        return this.http.post<Message>(this.apiUrl, message);
    }

    getAll(page: number, limit: number, search: string = ''): Observable<any> {
        let params = new HttpParams()
            .set('page', page)
            .set('limit', limit)
            .set('search', search);

        return this.http.get<any>(this.apiUrl, { params });
    }

    getById(id: string): Observable<Message> {
        return this.http.get<Message>(`${this.apiUrl}/${id}`);
    }

    update(id: string, message: Partial<Message>): Observable<Message> {
        return this.http.put<Message>(`${this.apiUrl}/${id}`, message);
    }

    delete(id: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
 }
