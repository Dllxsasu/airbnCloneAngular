import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  ready:boolean = false;
  center!:number[];
  maxItemCountPerPage!:number;
  MaxItemCount!:number;
  filterdMarkers : any[] =[];

  constructor(){

  }

  ngOnInit(): void {
    
  }
  public searchResult(event:any){

  }
}
