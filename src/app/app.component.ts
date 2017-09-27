import { Component } from '@angular/core';
import {PhotosService} from './photos.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PhotosService]
})

export class AppComponent {
  constructor(private photosService: PhotosService) {}

  photos = [];

  ngOnInit() {
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }
}
