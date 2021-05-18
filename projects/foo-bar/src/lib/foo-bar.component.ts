import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-foo-bar',
  template: `
    <p>
      foo-bar works!
    </p>
  `,
  styles: [
  ]
})
export class FooBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
