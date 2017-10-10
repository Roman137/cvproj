import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule(
  {
    imports: [MatButtonModule, MatListModule, MatCardModule, MatChipsModule, MatToolbarModule, MatIconModule, HttpModule],
    exports: [MatButtonModule, MatListModule, MatCardModule, MatChipsModule, MatToolbarModule, MatIconModule]
  }
)
export class CustomMaterialModule {
}
