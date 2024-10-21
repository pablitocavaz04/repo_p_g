// src/app/services/interfaces/base-service.interface.ts
import { Observable } from 'rxjs';
import { Paginated } from '../../models/paginated.model';

export interface IBaseService<T> {
  getAll(page:number, pageSize:number): Observable<Paginated<T>>;//Devueleve un observable generico 
  getById(id: string): Observable<T | null>;
  add(entity: T): Observable<T>;
  update(id: string, entity: T): Observable<T>;
  delete(id: string): Observable<T>;
}
