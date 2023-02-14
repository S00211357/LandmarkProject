import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Landmark } from '../landmark';
import { LandmarkService } from '../landmark.service';

@Component({
  selector: 'app-landmark-forum',
  templateUrl: './landmark-forum.component.html',
  styleUrls: ['./landmark-forum.component.css']
})
export class LandmarkForumComponent implements OnInit {

  constructor(private landmarkService : LandmarkService) { }
  landmarkForm : FormGroup = new FormGroup({});
  message: String = ''
  @Input() landmark!: Landmark
  ngOnInit(): void {
    this.landmarkForm = new FormGroup({
      xCoordinates: new FormControl (''),        
      yCoordinates: new FormControl (''),
      zCoordinates: new FormControl(''),
      countryName: new FormControl(''),
      landmarkName: new FormControl(''),
      townName: new FormControl(''),
      countryCaptial: new FormControl(''),
      notes: new FormControl('')
  })
  }

  onSubmit(){
   
  }
   

updateCurrentLandmark(id: string, landmark: Landmark): void {
  console.log('updating ');
  console.table (landmark);
  this.landmarkService.updateLandmark(id, landmark)
    .subscribe({
      next: landmark => {
        console.log(JSON.stringify(landmark) + ' has been updated');
        this.message = " landmark has been updated";
        //this.currentlandmark = undefined;
        this.ngOnInit();
      },
      error: (err) => this.message = err
    });}
  }



