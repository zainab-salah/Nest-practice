import { Controller, Get, Put ,Post, Delete, Body} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
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
    Create(@Body() createSongDto: CreateSongDto) {
    return  this.songsService.create(createSongDto);
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
