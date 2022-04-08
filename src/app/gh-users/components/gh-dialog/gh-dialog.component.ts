import { GhApiService } from './../../services/gh-api.service';
import { Component, OnInit } from '@angular/core';
import { GhUser } from '../../models/ghUser';
import { GhRepositories } from '../../models/ghRepositories';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  ListRepo:  GhRepositories[] | any;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser
      }
    )

    this.ghService.findRepo(this.username).subscribe(
      (usuario)=>
      this.ListRepo = usuario
    )
  }

}
