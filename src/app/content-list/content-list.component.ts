import { Component, OnInit } from '@angular/core';
import { ContentCardComponent } from "../content-card/content-card.component";
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { TypeFilterPipe } from "../type-filter.pipe";
import { FormsModule } from '@angular/forms';
import { FavouriteGamesServiceService } from '../favourite-games-service.service';
@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent, TypeFilterPipe,FormsModule]
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];

  constructor(private FavouriteGamesService: FavouriteGamesServiceService) {
    
  }  
  ngOnInit(): void {
    this.loadContentArray();
  }

  loadContentArray() {
    this.FavouriteGamesService.getContentArray().subscribe((data) => {
      this.contentArray = data;
      console.log('Content array loaded!');
    });
  }
  searchTitle: string = '';
  searchMsg: string = '';
  searchClr: string = '';

  searchCard(): void{
    const foundContent = this.contentArray.find(content => content.title === this.searchTitle); 

    if (foundContent) {
      this.searchMsg = `Content with title "${this.searchTitle}" exists.`;
      this.searchClr = 'green';
    }
    else {
      this.searchMsg = `Content with title "${this.searchTitle}" does not exist.`;
      this.searchClr = 'red';
    }
  }

 
}
