import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  //local array
  private readonly songs = [];

  create(song) {
    //saving the song in db
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    //fetch from db
    return this.songs;
  }
}
