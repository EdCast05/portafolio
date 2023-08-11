import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {


  constructor() { }

  ngOnInit() {
  }

  skills: any = [
    {
      title: 'Storytelling',
      imgSrc: '../../assets/imgs/storytelling.jpg',
      tags: ['Skill', 'Narratives', 'Communication'],
      description: 'Proficient in crafting engaging narratives...'
    },
  ];

}
