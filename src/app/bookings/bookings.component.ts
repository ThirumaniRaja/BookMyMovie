import { Component, OnInit ,Input} from '@angular/core';
import { BookMovieComponent } from '../book-movie/book-movie.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


export interface BOOKINGSTATUS {
  MovieName: String;
  ShowTiming: String;
  NoofPersons: String;
  
}



@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  @Input() data:String;
  displayedColumns: string[] = ['MovieName', 'ShowTiming', 'NoofPersons'];
  book: BOOKINGSTATUS[] = [
    {MovieName: '', ShowTiming: '', NoofPersons: ''}
   
  ];
  name:String;
  show:String;
  persons:String;
  
  dataSource;
  constructor(public route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      console.log("bookin data",JSON.stringify(params));
      this.name = params.get('name');
      this.show =params.get('show');
      this.persons =params.get('persons');
      this.book=[{MovieName:this.name,ShowTiming:this.show,NoofPersons:this.persons}];
      console.log("bookin data",this.book);
    });
    
  }


  ngOnInit() {
    
  }

}
