import { Component, OnInit } from '@angular/core';
import { WavesurferService } from '../wavesurfer.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {


  constructor(public ws: WavesurferService) {}

  ngOnInit() {}
}
