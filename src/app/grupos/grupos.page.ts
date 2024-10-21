import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MyGroupService } from '../core/services/my-group.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Paginated } from '../core/models/paginated.model';
import { group } from '../core/models/group.model';



@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {
  _group:BehaviorSubject<group[]> = new BehaviorSubject<group[]>([]);
  group$:Observable<group[]> = this._group.asObservable();

  constructor(
    private animationCtrl: AnimationController,
    private groupSv:MyGroupService
  ) {}

  ngOnInit(): void {
    this.getMoreGroup();
  }

  page:number = 1;
  pageSize:number = 25;


  getMoreGroup(notify:HTMLIonInfiniteScrollElement | null = null) {
    this.groupSv.getAll(this.page, this.pageSize).subscribe({
      next:(response:Paginated<group>)=>{
        this._group.next([...this._group.value, ...response.data]);
        this.page++;
        notify?.complete();
      }
    });
  }

  onIonInfinite(ev:InfiniteScrollCustomEvent) {
    this.getMoreGroup(ev.target);
    
  }

}
