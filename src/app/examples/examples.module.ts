import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InViewportModule } from '@thisissoon/angular-inviewport';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        BrowserAnimationsModule,
        InViewportModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent
    ]
})
export class ExamplesModule { }
