import { Component } from '@angular/core';
import { player } from '../component/model/player';
import { PlayerserviceService } from '../playerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrls: ['./createplayer.component.css']
})
export class CreateplayerComponent {
  constructor(private service:PlayerserviceService,private router:Router){

  }
  submitted=false;
  player=new player();

  onSubmit(){
    this.submitted=true;
    this.save();
  }
  save(){
    this.service.createPlayer(this.player).subscribe();
    this.gotoList();

  }
  gotoList(){
    this.router.navigate([`list`]);
  }
  

}
