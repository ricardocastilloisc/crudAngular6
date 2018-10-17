

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from './../environments/environment';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { CursoService } from './services/curso.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursoComponent
  ],
  imports: [
    BrowserModule,
    //angular6-crud es el nombre de la base de datos
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular6-crud'),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
