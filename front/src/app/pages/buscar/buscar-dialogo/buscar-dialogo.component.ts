import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsultaService } from './../../../_service/consulta.service';
import { ConsultaListaExamenDTO } from './../../../_dto/consultaListaExamenDTO';
import { Consulta } from './../../../_model/consulta';
import { Component, OnInit, Inject } from '@angular/core';
import { ExamenService } from 'src/app/_service/examen.service';
import { DetalleConsulta } from 'src/app/_model/detalleConsulta';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Examen } from 'src/app/_model/examen';

@Component({
  selector: 'app-buscar-dialogo',
  templateUrl: './buscar-dialogo.component.html',
  styleUrls: ['./buscar-dialogo.component.css']
})
export class BuscarDialogoComponent implements OnInit {

  consulta: Consulta;
  examenesDTO: ConsultaListaExamenDTO[];
  examenes: Examen[];
  diagnostico: string;
  tratamiento: string;
  examenSeleccionado: Examen;
  detalleConsulta: DetalleConsulta[] = [];
  examenesSeleccionados: Examen[] = [];


  mensaje: string;

  constructor(
    private dialogRef: MatDialogRef<BuscarDialogoComponent>,
    private examenService: ExamenService,
    private snackBar: MatSnackBar,
    private consultaService: ConsultaService,
    @Inject(MAT_DIALOG_DATA) private data: Consulta
  ) { }

  ngOnInit(): void {
    this.consulta = this.data;
    this.listarExamenesDTO();
    this.listarExamenes();
  }

  cancelar(){
    this.dialogRef.close();
  }

  listarExamenesDTO(){
    this.consultaService.listarExamenPorConsulta(this.consulta.idConsulta).subscribe(data => {
      this.examenesDTO = data;
      console.log(data);
    })
  }

  listarExamenes() {
    this.examenService.listar().subscribe(data => {
      this.examenes = data;
    });
  }





  agregar() {

    if (this.diagnostico != null && this.tratamiento != null) {
      let det = new DetalleConsulta();
      det.diagnostico = this.diagnostico;
      det.tratamiento = this.tratamiento;
      this.detalleConsulta.push(det);
      this.diagnostico = null;
      this.tratamiento = null;
    } else {
      this.mensaje = `Debe agregar un diagnóstico y tramiento`;
      this.snackBar.open(this.mensaje, "Aviso", { duration: 2000 });
    }
  }

  agregarExamen() {
    if (this.examenSeleccionado) {
      let cont = 0;
      for (let i = 0; i < this.examenesSeleccionados.length; i++) {
        let examen = this.examenesSeleccionados[i];
        if (examen.idExamen === this.examenSeleccionado.idExamen) {
          cont++;
          break;
        }
      }
      if (cont > 0) {
        this.mensaje = `El examen se encuentra en la lista`;
        this.snackBar.open(this.mensaje, "Aviso", { duration: 2000 });
      } else {
        this.examenesSeleccionados.push(this.examenSeleccionado);
      }
    } else {
      this.mensaje = `Debe agregar un examen`;
      this.snackBar.open(this.mensaje, "Aviso", { duration: 2000 });
    }
  }

  removerDiagnostico(index: number) {
    this.detalleConsulta.splice(index, 1);
  }


  removerExamen(index: number) {
    this.examenesSeleccionados.splice(index, 1);
  }


}
