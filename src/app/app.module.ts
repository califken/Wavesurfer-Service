import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { PlayerComponent } from './player/player.component';
import { WavesurferService } from './wavesurfer.service';
import { PlaylistComponent } from './playlist/playlist.component';
@NgModule({
  imports: [BrowserModule, FormsModule, MdbModule],
  declarations: [AppComponent, HelloComponent, PlayerComponent, PlaylistComponent],
  bootstrap: [AppComponent],
  providers: [WavesurferService]
})
export class AppModule {}
