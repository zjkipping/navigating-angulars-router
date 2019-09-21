import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-main',
  templateUrl: './lazy-main.component.html',
  styleUrls: ['./lazy-main.component.scss']
})
export class LazyMainComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  submit(redirect: string) {
    console.log('Submitting to API!');
    // Do the submission work!

    this.router.navigate(['../../home'], {
      relativeTo: this.route
    });
  }
}
