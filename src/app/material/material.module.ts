import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponent = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatTooltipModule,
  MatIconModule,
  MatGridListModule
]

@NgModule({

  imports: [
    MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
