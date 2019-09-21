import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  submit(redirect: string) {
    console.log('Submitting to API!');
    // Do the submission work!
    if (redirect === 'child') {
      this.router.navigate(['../child'], {
        relativeTo: this.route
      });
    } else if (redirect === 'lazy') {
      this.router.navigate(['../../lazy'], {
        relativeTo: this.route
      });
    }
  }
}
