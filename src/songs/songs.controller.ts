import { Controller, Get, Put ,Post, Delete} from '@nestjs/common';
import { SongsService } from './songs.service';
@Controller('songs')
export class SongsController {
        constructor(private songsService: SongsService) { }
    @Get() 
    FindAll() {
        return this.songsService.findAll();
    }
    @Get(':id')
    FindOne() {
      return 'One song';
    }
    @Post()
    Create() {
    return  this.songsService.create('eqweweqwe');
    }
    @Put (':id')
    Update() {
      return 'Update song';
    }
    @Delete(':id') 
    Delete() {
      return 'Delete song';
    }
}
