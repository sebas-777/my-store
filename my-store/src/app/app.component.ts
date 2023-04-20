import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sebas';
  age = 18;
  img = 'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2022/02/5fc9bc71e6787e098393991d.jpeg';
  btnDisabled = true;
  person ={
    name:'Nicolas',
    age:18,
    avatar:'https://www.freecodecamp.org/espanol/news/content/images/size/w2000/2022/02/5fc9bc71e6787e098393991d.jpeg'
  }

  toggleButton(){
    this.btnDisabled =!this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event:Event){
     const element = event.target as HTMLElement;
     console.log(element.scrollTop);
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement;
   this.person.name = element.value;
  }
}
