
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { CursoInterface } from './../models/cursointerfase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //inicializaciones de la base de datos
  cursosCollection: AngularFirestoreCollection <CursoInterface>;
  cursos: Observable<CursoInterface[]>;
  cursoDoc: AngularFirestoreDocument<CursoInterface>;

  //constructor donde afs es firebase
  constructor(public afs: AngularFirestore) {
    ///no olvidar instalar npm i --save firebase angularfire2
    //estamos diciendo que cursos
    //de la interface que ya esta hecha
    //de la tabla 'cursos' que esta en firebase
    //acceder a los datos
    //con valueChanges
      this.cursos = afs.collection('cursos').valueChanges();
  }

  getCursos() {
    //visualisamos lo que hay en la base de datos general
    return this.cursos;
  }

}
