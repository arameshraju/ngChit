import { Injectable } from '@angular/core';
import {ChitGroup} from '../models/chit-group';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChitgroupDataService {



  constructor(private http: HttpClient) { }

  getChitGroupList(){
    return    this.http.get('http://localhost:3000/action/chitgroup');

  }
  getChitGroup(chitGroupList,gcode:String){
    return chitGroupList.filter((chit:ChitGroup)=> chit.groupcode === gcode)[0];
  }

}
