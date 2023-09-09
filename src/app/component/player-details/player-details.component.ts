import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerserviceService } from 'src/app/playerservice.service';
import { player } from '../model/player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {
  
  playerId: number=0;
  player:player =new player();
  constructor(private route:ActivatedRoute,private router:Router,private service:PlayerserviceService){}
 
  ngOnInit(){
    this.player = new player();
    this.playerId=this.route.snapshot.params['playerId'];
    this.service.getOnePlayer(this.playerId).subscribe((data)=>{

      console.log(data);
      this.player=data;
    });
  }
  list(){
    this.router.navigate(['list']);
  }


}
