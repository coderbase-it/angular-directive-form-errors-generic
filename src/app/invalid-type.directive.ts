
import {Component, Directive, NgModule, VERSION,Input, AfterViewInit, OnInit,ElementRef, TemplateRef, ViewContainerRef,OnDestroy, Renderer2} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { Validators,FormsModule,ReactiveFormsModule,FormBuilder ,NgForm,FormGroup,AbstractControl,FormControl,ControlContainer,FormGroupDirective } from '@angular/forms';
import {InvalidMessageDirective} from './invalid-message.directive';
import { Observable,Subscription } from 'rxjs';
@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit{
  // tslint:disable-next-line:no-input-rename
  @Input('invalidType') type: string;
  private hasView = false;
  constructor(
    private invalidmessage: InvalidMessageDirective,
    private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  ngOnInit() {
   this.invalidmessage.controlValue$.subscribe(() => {
      this.setVisible();
    });
  }

  private setVisible() {
    if (this.invalidmessage.match(this.type)){
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    }else {
      if (this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
      }
    }
  }
}