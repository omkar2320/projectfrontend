import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { player } from '../model/player';
import { PlayerserviceService } from 'src/app/playerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{

  public players: Observable< player[]> =of([]);

  constructor(private service:PlayerserviceService,private router:Router){
    
  }
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.players=this.service.getAllPlayer();
  }
  deletePlayer(id:number)
    {
      return this.service.deletePlayer(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })
    }
    playerDetails(id:number)
    {
      console.log()
      this.router.navigate(['details',id]);
    }
}
