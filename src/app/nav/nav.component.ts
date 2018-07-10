import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var acc = document.getElementsByClassName("accordion");
  	var i;

  	for (i = 0; i < acc.length; i++) {
  		acc[i].addEventListener("click", function() {
  			this.classList.toggle("active");
  			var panel = this.nextElementSibling;
  			if (panel.style.display === "block") {
  				panel.style.display = "none";
  			} else {
  				panel.style.display = "block";
  			}
  		});
  	}
  }

}
