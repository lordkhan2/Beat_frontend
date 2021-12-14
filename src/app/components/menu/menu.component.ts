import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/data/user-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userData = ''

  constructor(private service:UserDataService) { }

  ngOnInit(): void {
    this.getUserRole()
    
  }
  getUserRole(){
    console.log(this.service.getUser())
    this.service.getUser().subscribe(
      res => {
        this.userData = res[2].user_type
        console.log(this.userData)
      },
      error => console.log(error)
    )
  }

}
