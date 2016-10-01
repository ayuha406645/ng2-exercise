import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!gooooood';

  myname = '123';
  keyword: string = 'test';

  tokeyword ($event: KeyboardEvent, $value: HTMLInputElement) {
    if ($event.keyCode === 13) {
      this.keyword = $value.value;
    }
  }
}
