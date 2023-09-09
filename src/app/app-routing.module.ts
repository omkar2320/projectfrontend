import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { player } from './component/model/player';
import { PlaylistComponent } from './component/playlist/playlist.component';
import { CreateplayerComponent } from './createplayer/createplayer.component';
import { PlayerDetailsComponent } from './component/player-details/player-details.component';


const routes: Routes = [

  {
    path:'list',
    component:PlaylistComponent
  },
  {
    path:'save',
    component:CreateplayerComponent
  },
  {
    path:'delete',
    component:CreateplayerComponent
  },
  {
    path:'details/:playerId',
    component:PlayerDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
