import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: string | undefined;
  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.ready();
    this.data = await this.storage.get('my-data');
  }
}
