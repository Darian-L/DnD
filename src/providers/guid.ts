import { Injectable } from '@angular/core'
import { Component } from '@angular/core';

@Injectable()



export class Guid {


    generateGuid (){
        return Math.random().toString(16).substring(2, 8)
      }

}