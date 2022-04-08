import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { GhDialogComponent } from './components/gh-dialog/gh-dialog.component';
import { GhHomeComponent } from './components/gh-home/gh-home.component';
import { GhApiService } from './services/gh-api.service';

@NgModule({
  declarations: [
    GhHomeComponent,
    GhDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    GhHomeComponent
  ],
  providers: [
    GhApiService
  ]
})
export class GhUsersModule { }
