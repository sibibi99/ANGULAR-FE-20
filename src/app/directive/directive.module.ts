import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralComponent } from './structural/structural.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HightlightDirective } from './hightlight.directive';

@NgModule({
  declarations: [StructuralComponent, NgSwitchComponent, NgForComponent, HightlightDirective],
  imports: [
    CommonModule
  ],
  exports: [StructuralComponent, NgSwitchComponent, NgForComponent, HightlightDirective]
})
export class DirectiveModule { }
