import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from "./content-card/content-card.component";
import { ContentListComponent } from "./content-list/content-list.component";
import { HoverAffectDirective } from './hover-affect.directive';
import { FavouriteGamesServiceService } from './favourite-games-service.service';
import { ContentMessageComponent } from "./app-messages/app-messages.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent, HoverAffectDirective, ContentMessageComponent]
})
export class AppComponent implements OnInit {
  title = 'Rah_Nakarani_NatureDiary';
  singleContentItem: any;

  constructor(private FavouriteGamesService: FavouriteGamesServiceService) {}
  ngOnInit(): void {
    this.loadSingleContentItem();
  }

  loadSingleContentItem() {
    const idOfContentItemToLoad = 1; // Replace with the desired ID
    this.FavouriteGamesService.getContentItemById(idOfContentItemToLoad).subscribe((data) => {
      this.singleContentItem = data;
      console.log(`Content Item at id: ${idOfContentItemToLoad}`);
    });
  }

}