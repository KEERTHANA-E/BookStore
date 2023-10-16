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
interface CartItem {
  e : books;
  quantity: number;
}
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cart : CartItem | undefined;
  @Output() decreaseEmitter : EventEmitter<any> = new EventEmitter();
  @Output() increaseEmitter : EventEmitter<any> = new EventEmitter();
  @Output() removeEmitter : EventEmitter<any> = new EventEmitter();
  decreaseCount(cartFromHtml : CartItem | any): void{
    this.decreaseEmitter.emit(cartFromHtml);
  }
  increaseCount(cartFromHtml : CartItem | any) : void{
    this.increaseEmitter.emit(cartFromHtml);
  }
  RemoveBook(cartFromHtml : CartItem | any) : void {
    this.removeEmitter.emit(cartFromHtml);
  }
}
