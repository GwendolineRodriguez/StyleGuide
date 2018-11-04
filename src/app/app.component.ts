import { Component, OnInit } from '@angular/core';
import { ComponentService } from './service/components.service';
import { CustomComponent } from './models/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Design Guidelines';

  components: CustomComponent[];

  constructor(private componentService: ComponentService) {
  }

  getComponents() {
    this.components = this.componentService.getComponents();
  }

  ngOnInit() {
    this.getComponents();
  }

}
