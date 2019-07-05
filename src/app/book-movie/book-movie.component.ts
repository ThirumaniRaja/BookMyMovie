import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {FormControl ,FormBuilder,FormGroup,Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DialogComponent, SuccessDialog } from '../dialog/dialog.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
export interface MOVIE {

  value: String,
  viewValue: string;
}
export interface SHOWLIST {
  time: String;
}
export interface BOOKING {
  name: String;
  show: String;
  persons: number;
}
@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.scss']
})
export class BookMovieComponent implements OnInit {


  person_count = 1;
  selectedMovie = '';
  selectedTime = '';
  
  shows: SHOWLIST[] = [{ time: '' }];
  booking:BOOKING[] =[{name:'',show:'',persons: 1}];

  movie: MOVIE[] = [
    { value: '0', viewValue: 'Shawshank Redemption' },
    { value: '1', viewValue: 'Batman vs Superman' },
    { value: '2', viewValue: 'Avengers Endgame' },
    { value: '3', viewValue: 'Harry Potter' },
    { value: '4', viewValue: 'Aquaman' }
  ];
  moviename = new FormControl('', [Validators.required]);

  
  constructor(public dialog: MatDialog,public router: Router) { }

  ngOnInit() {

  }

  onSelect(value) {
    console.log("selected value", value);
    if (value == 'Shawshank Redemption') {
      this.shows = [
        { 'time': '10:00' },
        { 'time': '11:00' },
        { 'time': '13:00' },
        { 'time': '17:00' },
        { 'time': '20:00' }
      ]
    }
    if (value == 'Batman vs Superman') {
      this.shows = [
        { 'time': '10:00' },
        { 'time': '11:00' },
        { 'time': '13:00' }

      ]

    }
    if (value == 'Avengers Endgame') {
      this.shows = [
        { 'time': '10:00' },
        { 'time': '11:00' },
        { 'time': '13:00' },
        { 'time': '15:00' }

      ]

    }
    if (value == 'Harry Potter') {
      this.shows = [
        { 'time': '7:00' },
        { 'time': '12:00' },
        { 'time': '14:00' },
        { 'time': '18:00' }
      ]
    }
    if (value == 'Aquaman') {
      this.shows = [
        { 'time': '12:00' },
        { 'time': '14:00' }

      ]
    }
  }
  decrementPerson() {
    if (this.person_count > 1) {
      this.person_count--;
    }
  }

  incrementPerson() {
    this.person_count++;
  }

  onBookNow() {
   if(this.selectedMovie=='')
   {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
   }
   if(this.selectedTime=='')
   {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
   }

   else
   {
    const dialogRef = this.dialog.open(SuccessDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
    console.log("submit Data", this.selectedMovie,this.selectedTime,this.person_count);
    this.booking=[{name:this.selectedMovie,show:this.selectedTime,persons:this.person_count}];
    console.log("cek",this.booking);
    this.router.navigate(['/bookings',{name:this.selectedMovie,show:this.selectedTime,persons:this.person_count}]);
   }
  }

}
