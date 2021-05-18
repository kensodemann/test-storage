import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'lib-foo-bar',
  template: `
    <div>
      <button (click)="save()">Save Data</button>
    </div>
  `,
  styles: []
})
export class FooBarComponent implements OnInit {
  constructor(private storage: Storage) {}

  ngOnInit(): void {}

  save() {
    const now = new Date();
    this.storage.ready().then(() => this.storage.set('my-data', now.toString()));
  }
}
