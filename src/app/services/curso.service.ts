
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { CursoInterface } from './../models/cursointerfase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';@Injectable({
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
     // this.cursos = afs.collection('cursos').valueChanges();
//primero hacemos la conexion
     this.cursosCollection = afs.collection<CursoInterface>('cursos');
 //lo ajustamos a un arreglso
     this.cursos = this.cursosCollection.snapshotChanges().pipe
     (
       //no tengo ni idea pero asi di la documentacon
       map(actions => actions.map(a => {
         //lo unico que entendi es que para recuperar los datos
         //los transformamos todos los datos
        const data = a.payload.doc.data() as CursoInterface;
        //importante saber que nunca te va dar el dato de id
        //entonces tenemos que hacerlo
        const id = a.payload.doc.id;
        //retornamos todos
        //id y data
        //data antes debe de tener ... para que se pueda ver
        return { id, ...data };
       }))
     );
  }

  getCursos() {
    //visualisamos lo que hay en la base de datos general
    return this.cursos;
  }
  //poner la interface para que pueda estar bien con la base de
  //datos
  addCurso(curso: CursoInterface){
    console.log('NEW COURSE');

    //ya que tenemos nuestros datosd
    //pues ya solo de guarda solo
    this.cursosCollection.add(curso);
  }
  deleteCurso(curso: CursoInterface) {
   // console.log('delete course')
   this.cursoDoc = this.afs.doc(`cursos/${curso.id}`);
   this.cursoDoc.delete();

  }
  updateCurso(curso: CursoInterface) {

    //esto es para  actualizar y acceder  a la base de datos
    //tener en cuenta que (base de datos/id del cual modificaremos con el parametro)

    this.cursoDoc = this.afs.doc(`cursos/${curso.id}`);
    this.cursoDoc.update(curso);
  }

}
