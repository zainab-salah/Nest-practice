import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get() 
    FindAll() {
        return 'All songs';
    }
    // @Get(':id')
    // getSong() {
    //     return 'One song';
    // }
    // @Post()
    // createSong() {
    //     return 'Create song';
    // }
    // @Put(':id')
    // updateSong() {
    //     return 'Update song';
    // }
    // @Delete(':id')
    // deleteSong() {
    //     return 'Delete song';
    // }
}
