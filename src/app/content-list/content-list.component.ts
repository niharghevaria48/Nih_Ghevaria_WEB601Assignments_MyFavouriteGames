import { Component } from '@angular/core';
import { ContentCardComponent } from "../content-card/content-card.component";
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { TypeFilterPipe } from "../type-filter.pipe";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent, TypeFilterPipe,FormsModule]
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [{
      id: 1,
      title: 'Counter-Strike',
      description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin.',
      creator: 'Valve',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCppGeH-H8e6bA9MtRTLk1LhWQeqOgcLMD0w&usqp=CAU',
      type: 'Action', 
      tags: ["PVP","Multiplayer","Competitive"],
    },
    {
      id: 2,
      title: 'Red Dead Redemption2',
      description: 'RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.',
      creator: 'Rockstar',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9rvmc-saU0i3J0M3sCInAT4SmKdamRUsDA&usqp=CAU',
      type: 'Story-Mode',
      tags: ["Open World","Singleplayer","Online"],
    },
    {
      id: 3,
      title: 'Sea of Thieves',
      description: 'Celebrate five years since Sea of Thieves launch with this special edition, including a copy of the game with all permanent content added since launch, plus a 10,000 gold bonus and a selection of Hunter cosmetics: the Hunter Cutlass, Pistol, Compass, Hat, Jacket and Sails.',
      creator: 'Xbox Game Studios',
      imgURL: 'https://sportshub.cbsistatic.com/i/2023/03/04/a4b913a2-1e80-41a8-8c4c-119d7eb7420e/sea-of-thieves-hed.jpg',
      type: 'Survival',
      tags: ["Open World","Multiplayer","Pirets"],
    },
    {
      id: 4,
      title: 'Palworld',
      description: 'Fight, farm, build and work alongside mysterious creatures called "Pals" in this completely new multiplayer, open world survival and crafting game!',
      creator: 'Pocketpair',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/53/Palworld_cover_art.jpg',
      type: 'Action',
      tags: ["Multiplayer", "Open World", "RPG"],
    },
    {
      id: 5,
      title: 'ARK: Survival Evolved',
      description: 'Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!',
      creator: 'Studio Wildcard',
      imgURL: '',
      type: 'Survival',
      tags: ["Open world survival", "Multiplayer", "Building"],
    },
    {
      id: 6,
      title: 'Left 4 Dead 2',
      description: 'Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans',
      creator: 'Valve',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDp9dF_XBdu9e2-4VapCQwPrFJukUT33Pdg&usqp=CAU',
      type: 'Survival',
      tags: ["FPS", "Multiplayer", "Co-Op"],
    },
  {
    id: 7,
      title: 'Euro Truck Simulator 2',
      description: 'Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits.',
      creator: 'SCS Software',
      imgURL: 'data:image/jpeg;base64,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',
      type: ' ',
      tags: ["Driving", "Multiplayer", "Driving Sim"],
  }]
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
