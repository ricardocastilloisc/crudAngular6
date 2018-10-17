import { Component, OnInit } from "@angular/core";
import { CursoInterface } from "./../../models/cursointerfase";
import { CursoService } from "./../../services/curso.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {
  cursos: CursoInterface[];
  editState: boolean = false;
  cursoToEdit: CursoInterface;

  constructor(private cursoService: CursoService) {}

  //es el que inicio todo lo del crud
  //ose desde el servicio accedemos a todos los dato
  //cursos es como la variable que ayudara
  //asignamosd lo que necesitamos
  //cursos nos dara los datos
  //y ya con eso podremos visualizarlo

  ngOnInit() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  clearState() {
    this.editState = false;
    this.cursoToEdit = null;
  }

  onUpdateCurso(curso: CursoInterface) {
    this.cursoService.updateCurso(curso);
    this.clearState();
  }

  deleteCurso(event, curso: CursoInterface) {
    this.cursoService.deleteCurso(curso);
    this.clearState();
  }
  editCurso(event, curso: CursoInterface) {
    this.editState = true;
    this.cursoToEdit = curso;

  }
}
