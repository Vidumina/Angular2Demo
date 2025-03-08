import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({

  selector: 'employee-count',
  templateUrl: './employeeCount.component.html',
  styleUrls: ['./employeeCount.component.css'],
  standalone: false

})


export class EmpoloyeeCountComponent {
  SelectedRadioButtonValue: string = 'All';
  @Output()
  countRadioButtonSelectedChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: number | undefined;
  @Input()

  male: number | undefined;
  @Input()

  female: number | undefined;


  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectedChanged.emit(this.SelectedRadioButtonValue);
    console.log(this.SelectedRadioButtonValue);
  }
}
