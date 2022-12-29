import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
