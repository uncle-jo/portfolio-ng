import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.less']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  	$(function() {
			$('.portfolio-toggles button').click(function() {
				var get_id = this.id;
				var get_current = $('.portfolio-posts .' + get_id);

				$('.posts-post').not(get_current).hide(800);
				get_current.show(800);
			});
			$('#showall').click(function() {
				$('.posts-post').show(800);
			});
			
  		// Modal windows
  		$('#modalBtn').click(function() {
  			$('#myModal').css('display', 'flex');
  		});
  		$('.close').click(function() {
  			$('#myModal').hide();
  		});
		});


	}

}
