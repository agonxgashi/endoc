import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  data: Quote = new Quote();

  constructor(private http: HttpClient) {
    // this.getQuote();
  }

  // getQuote() {
  //   let options = {
  //     headers = []
  //   }
  //   this.http.get<Quote>('http://quotes.stormconsultancy.co.uk/random.json')
  //     .subscribe(
  //       (res) => { this.data = res; }
  //     );
  // }
}

class Quote {
  author: string;
  id: number;
  quote: string;
  permalink: string;
}
