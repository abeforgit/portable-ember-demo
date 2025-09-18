import { Component, signal, ElementRef, afterRenderEffect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { startApp } from 'ember-vite-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angular-app');

  constructor(elementRef: ElementRef) {
    afterRenderEffect({
      write: async () => {
        const container =
          elementRef.nativeElement.querySelector('#emberapp');
        await startApp(container);
      },
    });
  }
}
