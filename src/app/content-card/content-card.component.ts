import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: 'Counter-Strike',
      description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin.',
      creator: 'Valve',
      imgURL: 'counterstrike.png',
      type: 'Five vs Five',
      tags: ["PVP","Multiplayer","Competitive"],
    });
    this.contentList.add({
      id: 1,
      title: 'Red Dead Redemption2',
      description: 'RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.',
      creator: 'Rockstar',
      imgURL: 'rdr2.png',
      type: 'Story Mode',
      tags: ["Open World","Singleplayer","Online"],
    });
    this.contentList.add({
      id: 1,
      title: 'Sea of Thieves',
      description: 'Celebrate five years since Sea of Thieves launch with this special edition, including a copy of the game with all permanent content added since launch, plus a 10,000 gold bonus and a selection of Hunter cosmetics: the Hunter Cutlass, Pistol, Compass, Hat, Jacket and Sails.',
      creator: 'Xbox Game Studios',
      imgURL: 'seaofthieves.png',
      type: 'Adventure',
      tags: ["Open World","Multiplayer","Pirets"],
    });
  }
}
