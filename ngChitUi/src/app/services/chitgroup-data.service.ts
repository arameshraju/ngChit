import { Injectable } from '@angular/core';
import {ChitGroup} from '../models/chit-group';

@Injectable()
export class ChitgroupDataService {

  chitGroupList: ChitGroup[]=[
          { groupcode: "G001", groupName: "10L10M PRME1", chitValue: 1000000, months: 10, subscription: 100000 },
          { groupcode: "G002", groupName: "10L10M PRME2", chitValue: 1000000, months: 10, subscription: 100000 },
          { groupcode: "G003", groupName: "5L10M PRME3", chitValue: 500000, months: 10, subscription: 50000 }
        ];

  constructor() { }

  getChitGroupList(){
      return  this.chitGroupList;
  }
  getChitGroup(gcode:String){
    return this.chitGroupList.filter((chit:ChitGroup)=> chit.groupcode === gcode)[0];
  }

}
