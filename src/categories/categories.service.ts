import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(id: string) {
    return this.categoryModel.findById(id).exec();
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel
      .findOneAndUpdate({ _id: id }, { $set: updateCategoryDto })
      .exec();
  }

  remove(id: string) {
    return this.categoryModel.deleteOne({ _id: id }).exec();
  }
}
