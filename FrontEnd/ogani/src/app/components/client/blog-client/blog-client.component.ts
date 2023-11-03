import { Component, OnInit } from '@angular/core';
import { BlogControllerService } from 'api-docs';
import { BlogService } from 'src/app/_service/blog.service';
import { TagService } from 'src/app/_service/tag.service';

@Component({
  selector: 'app-blog-client',
  templateUrl: './blog-client.component.html',
  styleUrls: ['./blog-client.component.css']
})
export class BlogClientComponent implements OnInit {


  listTag : any;
  listBlog : any;
  listBlogNewest: any;

  constructor(private tagService: TagService,private blogService: BlogService,
    private blogServiceController: BlogControllerService){

  }

  ngOnInit(): void {
    this.getListBlog();
    this.getListTag();
    this.getListNewest();
  }

  getListTag(){
    this.tagService.getListTag().subscribe({
      next: res =>{
        this.listTag = res;
      },error: err =>{
        console.log(err);
      }
    })
  }

  getListBlog(){
    console.log("gggggggggg")
    // this.blogService.getList().subscribe({
    this.blogServiceController.getList4().subscribe({
      next: res =>{
        this.listBlog = res;
        console.log(this.listBlog)
      },error: err =>{
        console.log(err);
      }
    })
  }

  getListNewest(){
    this.blogService.getListNewest(3).subscribe({
      next: res=>{
        this.listBlogNewest = res;
      },error: err =>{
        console.log(err);
      }
    })
  }


}
