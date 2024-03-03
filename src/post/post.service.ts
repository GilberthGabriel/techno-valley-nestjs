import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  create(createPostDto: CreatePostDto) {
    return this.postModel.create(createPostDto);
  }

  findAll() {
    return this.postModel.find().populate('categories').exec();
  }

  findOne(id: string) {
    return this.postModel.findById(id).populate('categories').exec();
  }

  update(id: string, updatepostDto: UpdatePostDto) {
    return this.postModel
      .findOneAndUpdate({ _id: id }, { $set: updatepostDto })
      .exec();
  }

  remove(id: string) {
    return this.postModel.deleteOne({ _id: id }).exec();
  }
}
