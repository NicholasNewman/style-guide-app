import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireAuthModule  } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
