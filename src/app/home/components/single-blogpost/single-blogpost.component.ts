import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-blogpost',
  templateUrl: './single-blogpost.component.html',
  styleUrls: ['./single-blogpost.component.css']
})
export class SingleBlogpostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.shareOnClick();
  }

  shareOnClick(){
    let shareBtn = document.getElementById('share');

    shareBtn.onclick = function(){
      shareBtn.classList.add('share-btn--active');
    }
  }

}
