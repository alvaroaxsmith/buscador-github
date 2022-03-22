import { GhApiService } from './services/gh-api.service';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhHomeComponent } from './components/gh-home/gh-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GhDialogComponent } from './components/gh-dialog/gh-dialog.component';
import { HttpClientModule } from '@angular/common/http';



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
