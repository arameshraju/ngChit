import { Injectable } from '@angular/core';
import {ChitGroup} from '../models/chit-group';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChitgroupDataService {



  constructor(private http: HttpClient) { }

  getChitGroupList(){
    return    this.http.get('http://localhost:3000/action/chitgroup');

  }
  getChitGroup(chitGroupList,gcode:String){
    return chitGroupList.filter((chit:ChitGroup)=> chit.groupcode === gcode)[0];
  }

postChitGroup(data){
let body = JSON.stringify(data);
  console.log(body);
      return this.http.post<ChitGroup>('http://localhost:3000/action/chitgroup',body,httpOptions);
}

}
