import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

const TOKEN = '691623.1419b97.479e4603aff24de596b1bf18891729f3';

@Injectable()
export class PhotosService {
  constructor(private jsonp: Jsonp) {}

  count = 20;

  getPhotos() {
    const url = 'https://api.instagram.com/v1/users/691623/media/recent?access_token=' + TOKEN + '&count=' + this.count + '&callback=JSONP_CALLBACK';

    return this.jsonp.request(url).map(response => {
      return response.json().data;
    });
  }
}
