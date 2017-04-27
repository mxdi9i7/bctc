import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component'
import { FooterComponent } from '../footer/footer.component'
import { HomeDirectionsComponent } from '../home-directions/home-directions.component'
import { SpinningGlobeComponent } from '../spinning-globe/spinning-globe.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
