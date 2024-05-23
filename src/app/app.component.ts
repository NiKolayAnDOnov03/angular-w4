import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  currentLight: 'red' | 'yellow' | 'green' = 'red';
  previousLight: 'red' | 'yellow' | 'green' = 'red';

  currentLight2: 'green' | 'yellow' | 'red' = 'green';
  previousLight2: 'green' | 'yellow' | 'red' = 'red';

  private horizontalInterval: any;
  private verticalInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTrafficLightHorisontal();
    this.startTrafficLightVertical();
  }
  


  startTrafficLightHorisontal() {
    this.previousLight = this.currentLight;
    this.horizontalInterval = setInterval(() => {
      switch (this.currentLight) {
        case 'red':
          this.previousLight = this.currentLight;
          this.currentLight = 'yellow';
          break;
        case 'yellow':
          if (this.previousLight === 'red') {
            this.previousLight = this.currentLight;
            this.currentLight = 'green';
          } else {
            this.previousLight = this.currentLight;
            this.currentLight = 'red';
          }
          break;
        case 'green':
          this.previousLight = this.currentLight;
          this.currentLight = 'yellow';
          break;
      }
    }, 5000);
  }


  startTrafficLightVertical() {
    this.previousLight = this.currentLight;
    this.verticalInterval = setInterval(() => {
      switch (this.currentLight2) {
        case 'red':
          this.previousLight2 = this.currentLight2;
          this.currentLight2 = 'yellow';
          break;
        case 'yellow':
          if (this.previousLight2 === 'red') {
            this.previousLight2 = this.currentLight2;
            this.currentLight2 = 'green';
          } else {
            this.previousLight2 = this.currentLight2;
            this.currentLight2 = 'red';
          }
          break;
        case 'green':
          this.previousLight2 = this.currentLight2;
          this.currentLight2 = 'yellow';
          break;
      }
    }, 5000);
  }
  
  buttonClick(){
    if(this.currentLight=='yellow'){
      alert("Неправилно пресичане!")
    }
  }
  warningButton(){
    clearInterval(this.horizontalInterval);
    clearInterval(this.verticalInterval);

    this.currentLight = 'yellow';
    this.currentLight2 = 'yellow';

    setTimeout(() => {
      this.startTrafficLightHorisontal();
      this.startTrafficLightVertical();
    }, 5000);
  }
}
