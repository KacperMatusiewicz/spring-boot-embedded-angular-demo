import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchFormComponent} from "../search/search-form/search-form.component";
import {FormsModule} from "@angular/forms";
import {CustomMaterialModule} from "../custom-material.module";
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [SearchFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        CustomMaterialModule,
        MatRadioModule
    ],
  exports: [SearchFormComponent]
})
export class SharedModule { }
