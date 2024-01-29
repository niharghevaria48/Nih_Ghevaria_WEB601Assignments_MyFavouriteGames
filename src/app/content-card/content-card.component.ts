import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  // contentList:ContentList;
  // constructor(){
  //   this.contentList = new ContentList();

  //   this.contentList.add({
  //     id: 1,
  //     title: 'Counter-Strike',
  //     description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin.',
  //     creator: 'Valve',
  //     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCppGeH-H8e6bA9MtRTLk1LhWQeqOgcLMD0w&usqp=CAU',
  //     type: 'Five vs Five', 
  //     tags: ["PVP","Multiplayer","Competitive"],
  //   });
  //   this.contentList.add({
  //     id: 2,
  //     title: 'Red Dead Redemption2',
  //     description: 'RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.',
  //     creator: 'Rockstar',
  //     imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9rvmc-saU0i3J0M3sCInAT4SmKdamRUsDA&usqp=CAU',
  //     type: 'Story Mode',
  //     tags: ["Open World","Singleplayer","Online"],
  //   });
  //   this.contentList.add({
  //     id: 3,
  //     title: 'Sea of Thieves',
  //     description: 'Celebrate five years since Sea of Thieves launch with this special edition, including a copy of the game with all permanent content added since launch, plus a 10,000 gold bonus and a selection of Hunter cosmetics: the Hunter Cutlass, Pistol, Compass, Hat, Jacket and Sails.',
  //     creator: 'Xbox Game Studios',
  //     imgURL: 'https://sportshub.cbsistatic.com/i/2023/03/04/a4b913a2-1e80-41a8-8c4c-119d7eb7420e/sea-of-thieves-hed.jpg',
  //     type: 'Adventure',
  //     tags: ["Open World","Multiplayer","Pirets"],
  //   });
  // }
}