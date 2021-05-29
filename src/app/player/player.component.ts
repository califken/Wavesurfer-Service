import { Component, OnInit } from '@angular/core';
import { WavesurferService } from '../wavesurfer.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(public ws: WavesurferService) { }

  ngOnInit() {
  }

}