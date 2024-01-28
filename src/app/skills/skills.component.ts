import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  ngOnInit() {
    this.startInterval();
  }

  logoMatic() {
    const numbers: number[] = [];
    while (numbers.length < 8) {
      const randomNum = Math.floor(Math.random() * 24) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  }

  updateBoxes() {
    const grid = document.getElementById('grid');

    if (grid) {
      const allBoxes = grid.querySelectorAll('.box');
      allBoxes.forEach((box) => {
        box.classList.add('hidden');
        box.classList.remove('visible');
      });

      const order = this.logoMatic();

      order.forEach((num) => {
        const box = document.getElementById(`box${num}`);
        if (box) {
          box.classList.remove('hidden');
          box.classList.add('visible');
        }
      });
    }
  }

  startInterval() {
    setInterval(() => {
      this.updateBoxes();
    }, 1500);
  }
}