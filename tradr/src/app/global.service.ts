import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  /**
  * set height zero
  *
	* Element must have an ID and following CSS
	*  height: 0;
	*  overflow: hidden;
	*  will-change: height;  
  * 
  * @param string e element ID
  */
	closeExpand(e: string) {
		document.getElementById(e).style.height = '0px';
	}

/**
  * Calculate and set element rendered height
  *
	* Element must have an ID and following CSS
	*  height: 0;
	*  overflow: hidden;
	*  will-change: height;  
  * 
  * @param string e element ID
  */
	openExpand(e: string) {
		let element = document.getElementById(e);
  	setTimeout(()=>{
      element.style.height = Array.prototype.reduce.call(element.childNodes, function(p, c) {return p + (c.offsetHeight || 0);}, 0) + 'px';
  	},100);
	}

/**
  * Calculate and toggle element rendered height
  *
	* Element must have an ID and following CSS
	*  height: 0;
	*  overflow: hidden;
	*  will-change: height;  
  * 
  * @param string e element ID
  */
	toggleExpand(e: string) {
		let element = document.getElementById(e);
    if (!element.style.height || element.style.height == '0px') { 
    	setTimeout(()=>{
        element.style.height = Array.prototype.reduce.call(element.childNodes, function(p, c) {return p + (c.offsetHeight || 0);}, 0) + 'px';
    	},100);
    } else {
        element.style.height = '0px';
    }
	}

}
