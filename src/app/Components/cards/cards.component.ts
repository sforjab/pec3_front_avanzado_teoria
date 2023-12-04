import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/Services/images.service';
import { Image } from 'src/app/Models/image';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public cards!: Image[];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.
      getAllImages().
      subscribe((cards) => this.cards = cards);
  }
}
