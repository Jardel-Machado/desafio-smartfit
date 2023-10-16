import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from 'src/app/models/location.interface';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) {}

  onSubmit() {        
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
