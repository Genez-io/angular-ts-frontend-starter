import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BackendService } from '@genezio-sdk/(•◡•)project-name(•◡•)';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  response = '';

  async sayHello() {
    this.response = await BackendService.hello(this.name);
  }
}
