import { Controller, Get, Put ,Post, Delete} from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get() 
    FindAll() {
        return 'All songs';
    }
    @Get(':id')
    FindOne() {
      return 'One song';
    }
    @Post()
    Create() {
      return 'Create song';
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
