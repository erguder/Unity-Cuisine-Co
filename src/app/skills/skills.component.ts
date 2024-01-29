import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  ngOnInit() {
    this.animateBoxes();
    setInterval(() => {
      this.animateBoxes();
    }, 24 * 400);
  }

  toggleVisibility(boxId: string, delay: number) {
  const box = document.getElementById(boxId) as HTMLElement;

  setTimeout(() => {
        box.classList.remove('hidden');
        box.classList.add('visible');
        setTimeout(() => {
            box.classList.remove('visible');
            box.classList.add('hidden');
        }, 1200);
    }, delay);
  }

  animateBoxes() {
      for (let i = 1; i <= 24; i++) {
        const boxId = `box${i}`;
        const delay = i * 400;
        this.toggleVisibility(boxId, delay);
      }
  }
    
}
