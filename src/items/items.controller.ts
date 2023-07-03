import { Controller,Get,Post,Put,Delete} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController{

    @Get()
    findAll(): string{
        return 'Get All Items';
    }

    @Post()
    create(): string{
        return 'Create item'
    }
}

