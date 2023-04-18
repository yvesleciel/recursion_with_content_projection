import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datasource: Node[] = [
    {type:'folder',
    name:'CSS',
    values:[
      {
        type:'file', name:'style.css', values:null, deep:1
      },
      {
        type: 'folder',
        name:'HTML',
        values: [{type:'file', name:'index.html', values:null, deep:2}],
        deep: 1
      }
    ],
        deep:0
    },
    {
      type:'folder',
      name:'TypeScript',
      values: [
        {
        type:'file',
        name: 'main.ts',
        values: null,
        deep: 1
      },
        {
          type:'folder',
          name: 'Angular',
          values: [
            {type:'file',name: 'angular.json',values: null, deep: 2},
            {
              type: 'folder',
              name:'src',
              values: [{
                type:'file',
                name:'orders.ts',
                values:null,
                deep:3
              }],
              deep: 2
            }
            ],
          deep: 1
        }

      ],
      deep: 0
    },
    {type:'file', name: 'package.json', values: null, deep: 0}];

  constructor() { }

}

export interface Node {
  type: string;
  name: string;
  values: Node[] | null;
  deep: number;
}
