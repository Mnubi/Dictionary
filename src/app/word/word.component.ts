import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  public wordList: any ;
    constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getWord()
    .subscribe(res=>{
      this.wordList = res ;
    })

  }

}
