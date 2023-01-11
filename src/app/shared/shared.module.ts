import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module in translate
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule, TranslateModule],
  exports: [AngularMaterialModule, TranslateModule],
})
export class SharedModule {}
