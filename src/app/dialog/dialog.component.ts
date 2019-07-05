import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog , MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit() {
  }

}
@Component({
  selector: 'successDialog',
  templateUrl: './dialogsuccess.html',
})
export class SuccessDialog {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
