import { Component } from '@angular/core';
import { PromService } from 'src/app/services/prom.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'promp';

  constructor (private promService: PromService) {}

  public ngOnInit(): void {
    this.promService.getProducts().subscribe(_ => {
      // _.products[0].name = "TEST API";
      console.log(_);
      // this.promService.saveProducts([_.products[0]]).subscribe(res => console.log('hehe', res));
    });
  }
}
