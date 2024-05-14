import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $(function () {
        $(".sidebar-dropdown > a").click(function () {
          $(".sidebar-submenu").slideUp(200);
          if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
          } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
          }
        });

        $("#close-sidebar").click(function () {
          $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function () {
          $(".page-wrapper").addClass("toggled");
        });
      });
    }
  }
}
