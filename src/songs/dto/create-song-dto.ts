import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    // @IsString()
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly relase_date: Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: Date;

}