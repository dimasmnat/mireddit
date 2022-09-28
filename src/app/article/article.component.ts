import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() article: Article;


  constructor() { 
    this.article = new Article( 
      '', '', 0
    );
  
  }
  
  votedUp() {
    this.article.votedUp();
    return false;
  }
  
  votedDown(){
    this.article.votedDown();
    return false;
  }


  ngOnInit(): void {
  }

}
