import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule} from '@angular/material';

@NgModule(
  {
    imports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule],
    exports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule]
  }
)
export class CustomMaterialModule {
}
