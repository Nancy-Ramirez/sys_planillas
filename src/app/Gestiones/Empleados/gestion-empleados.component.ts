import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { isPlatformBrowser } from '@angular/common';

declare var jQuery: any;

@Component({
  selector: 'app-gestion-empleados',
  templateUrl: './gestion-empleados.component.html',
  styleUrls: ['./gestion-empleados.component.css']
})
export class GestionEmpleadosComponent implements OnInit {
  ngOnInit(): void {
    let scroll = 0; // Inicializa scroll con un valor predeterminado
    (function($) { "use strict";
      $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {    
          scroll = $(window).scrollTop() || 0; // Asigna el valor de scrollTop a scroll, si es undefined, asigna 0
          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });		
      
      // Animación
      $(document).ready(function() {
        $('body.hero-anime').removeClass('hero-anime');
      });
  
      // Menú On Hover
      if ($(window).width()! > 750) { // Usa el operador de no nulo (!)
        $('body').on('mouseenter mouseleave','.nav-item',function(e: any){
          if (e !== undefined) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
              _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
          }
        });
      }
    })(jQuery); 
  }
}



