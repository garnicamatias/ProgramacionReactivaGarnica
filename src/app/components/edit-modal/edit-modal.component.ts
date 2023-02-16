import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  editStudentForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    private studentService: StudentsService,
    private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Student 
  ){
   
    let studentToEdit = this.data
    let regexOnlyNumbers : string = '^[0-9]+$'
    let controls: any = {
      name : new FormControl(studentToEdit.name, [Validators.required]),
      surname : new FormControl(studentToEdit.surname,[Validators.required]),
      fileNumber : new FormControl(studentToEdit.fileNumber,[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      age: new FormControl(studentToEdit.age,[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      isActive : new FormControl(studentToEdit.isActive ? "true" : "false",[Validators.required]),
      gender : new FormControl(studentToEdit.gender, [Validators.required]),
      subject : new FormControl(studentToEdit.subject, [Validators.required])
    }

    this.editStudentForm = new FormGroup(controls);
  }
 
  students = this.studentService.getStudents();

  getClass(input: string): string{
  
    if (this.editStudentForm.controls[input].valid) {
      return 'validInput'
    }

    switch (input) {
      case 'name':
      case 'surname':

      if (this.editStudentForm.controls[input].touched && this.editStudentForm.controls[input].errors?.['required'] ) 
      return 'invalidInput';
      break;
    
      case 'id':
      case 'age':
      
      if (this.editStudentForm.controls[input].touched && this.editStudentForm.controls[input].errors?.['required'] || this.editStudentForm.controls[input].errors?.['pattern']) 
      return 'invalidInput';
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.editStudentForm.controls[input].errors?.['required'] && (this.editStudentForm.controls[input].dirty || this.editStudentForm.controls[input].touched)
  }


  editStudent(){
    let newStudent : Student;
    let booleanValue : boolean;
    this.editStudentForm.value.isActive === "true" ? booleanValue = true : booleanValue = false
    newStudent = {
      id: this.data.id,
      name: this.editStudentForm.value.name,
      surname: this.editStudentForm.value.surname,
      fileNumber: this.editStudentForm.value.fileNumber,
      age: this.editStudentForm.value.age,
      isActive: booleanValue,
      gender: this.editStudentForm.value.gender,
      subject: this.editStudentForm.value.subject
    }

    this.studentService.editStudent(newStudent)
    const dialogRef = this.dialog.closeAll()
  }
  
  closeModal(){
    const dialogRef = this.dialog.closeAll()
  }

}



