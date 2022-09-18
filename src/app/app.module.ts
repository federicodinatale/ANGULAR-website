import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular design materials
import { MatSliderModule } from '@angular/material/slider';

// cards material
import {MatCardModule} from '@angular/material/card';

// button material
import {MatButtonModule} from '@angular/material/button';
import { BottoneComponent } from './bottone/bottone.component';
import { EventoComponent } from './evento/evento.component';

//input material
import {MatInputModule} from '@angular/material/input';
import { TitleComponent } from './title/title.component';
import { DirettiveComponent } from './direttive/direttive.component';
import { ParentChildComponent } from './parent-child/parent-child.component';



@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    NavbarComponent,
    BottoneComponent,
    EventoComponent,
    TitleComponent,
    DirettiveComponent,
    ParentChildComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
