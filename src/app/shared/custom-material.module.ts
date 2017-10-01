import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import {HttpModule} from '@angular/http';

@NgModule(
  {
    imports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdCardModule, MdChipsModule, MdToolbarModule, MdIconModule, HttpModule],
    exports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdCardModule, MdChipsModule, MdToolbarModule, MdIconModule]
  }
)
export class CustomMaterialModule {
}
