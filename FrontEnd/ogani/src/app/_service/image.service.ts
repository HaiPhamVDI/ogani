import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const IMAGE_API = environment.API_URL + "/api/image/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  upload(file:File){
    const formData: FormData = new FormData();
    formData.append('file',file);
    return this.http.post<any>(IMAGE_API+'upload-file',formData);
  }

  getList(){
    return this.http.get(IMAGE_API,httpOptions);
  }
}
