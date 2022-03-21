import { Component } from '@angular/core';
import { UnicornComponent} from './unicorn/unicorn.component';
import { Validators,FormsModule,ReactiveFormsModule,FormBuilder,OnInit,NgForm,FormGroup,AbstractControl,FormControl,ControlContainer,FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string;
  myForm:FormGroup;
  constructor(private _fb: FormBuilder) {
    
  }
  ngOnInit(){
    this.myForm = this._fb.group({
        name:['',Validators.required],
        lastname:['',Validators.required],
        email:['',[Validators.required,Validators.email]]
    });
  }
}
