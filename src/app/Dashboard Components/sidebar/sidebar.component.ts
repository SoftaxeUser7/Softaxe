import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const toggleBtn = $('#toggle_btn');
    const body = $('body');
    const headerLeft = $('.header-left');
  
    toggleBtn.on('click', function () {
      if (body.hasClass('mini-sidebar')) {
        body.removeClass('mini-sidebar');
        $(this).addClass('active');
        localStorage.setItem('screenModeNightTokenState', 'night');
        setTimeout(function () {
          body.removeClass("mini-sidebar");
          headerLeft.addClass("active");
        }, 100);
      } else {
        body.addClass('mini-sidebar');
        $(this).removeClass('active');
        localStorage.removeItem('screenModeNightTokenState');
        setTimeout(function () {
          body.addClass("mini-sidebar");
          headerLeft.removeClass("active");
        }, 100);
      }
      return false;
    });

    $(document).on('mouseover', function (e) {
      e.stopPropagation();
      if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
        var targ = $(e.target).closest('.sidebar, .header-left').length;
        if (targ) {
          $('body').addClass('expand-menu');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').removeClass('expand-menu');
          $('.subdrop + ul').slideUp();
        }
        return false;
      }
      return false; // Add this line to handle other cases
    });

    init();

    function init() {
      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(250);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }

    $('.submenus').on('click', function () {
      $('body').addClass('sidebarrightmenu');
    });
  }
}
