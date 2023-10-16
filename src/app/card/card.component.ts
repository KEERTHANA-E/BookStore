import { Component, EventEmitter, Input, Output } from '@angular/core';
interface books{
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: {
  currency: string;
  value: number;
  displayValue: string;
  }
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() book : books | undefined;
 @Output() addBooks : EventEmitter<any> = new EventEmitter();
 addToCart(book : books | any){
  console.log("book at card.ts")
  this.addBooks.emit(book);
 }
}
