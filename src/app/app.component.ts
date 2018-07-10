import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(){
  }

  // onFormSubmit() {
  //   alert('fddf');
  //   this.http.post('http://path-to-script', {
  //     field: 'foo',
  //     field2: 'bar'
  //   })
  //   .subscribe(
  //     response => {
  //       console.log(response);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //     );
  // }

  public ngOnInit() {
  	$(document).ready(function($) {
      // 
  		$('.header-scrolldown__link').on('click',function (e) {
  			e.preventDefault();

  			var target = this.hash,
  			$target = $(target);

  			$('html, body').stop().animate({
  				'scrollTop': $target.offset().top
  			}, 800, 'swing', function () {
  				window.location.hash = target;
  			});
  		});

      // 
      // $('form#contactForm button.btn').click(function() {
      //   // $('#image-loader').fadeIn();

      //   var contactName = $('#contactForm #contactName').val();
      //   var contactEmail = $('#contactForm #contactEmail').val();
      //   var contactSubject = $('#contactForm #contactSubject').val();
      //   var contactMessage = $('#contactForm #contactMessage').val();

      //   var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
      //   '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      //   $.ajax({
      //     type: "POST",
      //     url: "resource/sendEmail.php",
      //     data: data,
      //     success: function(msg) {
      //       // Message was sent
      //       if (msg == 'OK') {
      //         // $('#image-loader').fadeOut();
      //         $('#message-warning').hide();
      //         $('#contactForm').fadeOut();
      //         $('#message-success').fadeIn();   
      //       }
      //       // There was an error
      //       else {
      //         // $('#image-loader').fadeOut();
      //         $('#message-warning').html(msg);
      //         $('#message-warning').fadeIn();
      //       }
      //     }
      //   });
      //   return false;
      // });

    });
  }

}
