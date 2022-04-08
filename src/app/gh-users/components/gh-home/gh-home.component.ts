import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { GhDialogComponent } from './../gh-dialog/gh-dialog.component';

@Component({
  selector: 'app-gh-home',
  templateUrl: './gh-home.component.html',
  styleUrls: ['./gh-home.component.css']
})
export class GhHomeComponent implements OnInit {

  usernameToFind: FormControl = new FormControl('', [Validators.required])

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let ref = this.dialog.open(GhDialogComponent)

    ref.componentInstance.username = this.usernameToFind.value
  }

}
