import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  titleText = 'MATHEMATICIAN MASTER OF SCIENCE IN STATISTICS';
  typedTitle = '';
  index = 0;
  showContHijo2 = false;

  constructor() { }

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    if (this.index < this.titleText.length) {
      this.typedTitle += this.titleText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeEffect(), 80); // Ajusta el tiempo para cambiar la velocidad de escritura
    }
    setTimeout(() => {
      this.showContHijo2 = true;
    }, 5000); // 5000 milisegundos = 5 segundos
  }
}
