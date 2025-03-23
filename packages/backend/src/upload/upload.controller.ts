import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { Request, Response } from 'express';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post()
    public async upload(@Req() req: Request, @Res() res: Response):Promise<void> {
        const chunks:Array<any> = [];
        req.on('data', chunk => {
          chunks.push(chunk);
        });
        req.on('end', () => {
          const fileBuffer = Buffer.concat(chunks);
          console.log('File size: ', fileBuffer.length);
          console.log(fileBuffer)
          res.send({ message: 'File received', size: fileBuffer.length });
        });
    }
}
