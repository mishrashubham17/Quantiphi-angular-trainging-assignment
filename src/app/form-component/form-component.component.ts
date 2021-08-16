import { Component } from "@angular/core";
import { Employee } from "src/app/models/employee";

@Component({
  selector: "app-form-component",
  templateUrl: "./form-component.component.html",
  styleUrls: ["./form-component.component.css"]
})
export class FormComponentComponent {
  employeeModel = new Employee(
    "",
    "",
    1234567890,
    new Date().toISOString().substring(0, 10),
    ""
  );
  alert: boolean = false;

  onSubmit() {
    this.alert = true;
    console.log(this.employeeModel);
  }
  closeAlert() {
    this.alert = false;
  }
}
