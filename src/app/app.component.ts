import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import yahooFinance from 'yahoo-finance2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  symbol = 'FB';
  quote$!: Observable<any>;

  ngOnInit() {
    this.quote$ = from(yahooFinance.quote(this.symbol));
  }
}
