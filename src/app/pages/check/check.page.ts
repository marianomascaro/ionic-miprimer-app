import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data =[
    {
      color:'primary',
      selected:'false',
      name:'Mariano'
    },
    {
      color:'secondary',
      selected:'true',
      name:'Veronica'
    },
    {
      color:'tertiary',
      selected:'false',
      name:'Regina'
    },
    {
      color:'success',
      selected:'true',
      name:'Virginia'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  onClick( check ){
    console.log(check);
  }

}
