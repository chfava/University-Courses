import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { PatientDiagnosisComponent } from "./patient-diagnosis.component";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [PatientDiagnosisComponent],
    exports: [PatientDiagnosisComponent]
})
export class PatientDiagnosisModule {}
