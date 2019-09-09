import { Component, OnInit } from '@angular/core';
import {
  rotateInDownLeftOnEnterAnimation,
  rollInAnimation,
  zoomInLeftAnimation,
  zoomInOnEnterAnimation,
  hueRotateAnimation,
  zoomInUpOnEnterAnimation,
  rubberBandAnimation,
  flashAnimation,
  fadeInOnEnterAnimation,
  rubberBandOnEnterAnimation
} from 'angular-animations';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [
      rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
      zoomInOnEnterAnimation({ anchor: 'enterLetterAnim1' }),
      fadeInOnEnterAnimation({ anchor: 'enterLetterAnim2' }),
      zoomInUpOnEnterAnimation({ anchor: 'enterLetterAnim3' }),
      rollInAnimation({ anchor: 'letterAnim1' }),
      zoomInLeftAnimation({ anchor: 'letterAnim2' }),
      rubberBandAnimation({ anchor: 'letterAnim3' }),
      hueRotateAnimation({ anchor: 'hueLetter', duration: 5000 }),
      flashAnimation({ anchor: 'flash' }),
      rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 12500 }),
      fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 12500, duration: 500 })
    ]
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  animationState = false;
  hueState = false;
  flashState = false;
  
  isVisible = false;

  isTeamVisible = false;

  constructor() { }

  projects = [
    {
      name: 'NotiBook',
      description : `Improve kindergarden's management and communication between parents and school`,
      ref: '',
      icon: 'nc-hat-3',
      index: 1
    },
    {
      name: 'Smart Health System',
      description : `Providing healthcare professionals a complete continuous view of patient health and the highest precision warning alerts for early intervention.`,
      ref: 'http://smarthealthweb.gtopia.vn/',
      icon: 'nc-ambulance',
      index: 2
    }
  ]

  teamMembers = [
    {
      name: 'Binh Phan',
      position: 'Project Manager',
      talk: 'Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.',
      photoUrl: './assets/img/team/binh phan.jpg'
    },
    {
      name: 'Liem Huynh',
      position: 'CEO',
      talk: 'A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.',
      photoUrl: './assets/img/team/ceo.jpg'
    },
    {
      name: 'Hoang Nguyen',
      position: 'Developer',
      talk: 'The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.',
      photoUrl: './assets/img/team/cto.jpg'
    },
  ]

  ngOnInit() {}

  getDelay(index, lenght) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  onInViewportChange(inViewport: boolean) {
    console.log('Projects In viewport ', inViewport)
    if(!this.isVisible)
      this.isVisible = inViewport;
  }

  onTeamInViewportChange(inViewport: boolean){
    if(!this.isTeamVisible)
      this.isTeamVisible = inViewport
  }
  
}
