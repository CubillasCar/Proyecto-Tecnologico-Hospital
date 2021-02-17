import { ConsultaService } from './../../../_service/consulta.service';
import { Consulta } from './../../../_model/consulta';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-consulta-m-dialogo',
  templateUrl: './consulta-m-dialogo.component.html',
  styleUrls: ['./consulta-m-dialogo.component.css']
})
export class ConsultaMDialogoComponent implements OnInit {

  consulta: Consulta;

  constructor(
    private dialogRef: MatDialogRef<ConsultaMDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Consulta,
    private consultaService: ConsultaService
  ) { }

  ngOnInit(): void {
    this.consulta = new Consulta();
    this.consulta.idConsulta = this.data.idConsulta;
    this.consulta.paciente = this.data.paciente;
    this.consulta.medico = this.data.medico;
    this.consulta.especialidad = this.data.especialidad;
    this.consulta.numConsultorio = this.data.numConsultorio;
    this.consulta.fecha = this.data.fecha;
    /*
    this.medico.idMedico = this.data.idMedico;
    this.medico.nombres = this.data.nombres;
    this.medico.apellidos = this.data.apellidos;
    this.medico.cmp = this.data.cmp;
    this.medico.fotoUrl = this.data.fotoUrl;
    */
  }

  operar() {
    if (this.consulta != null && this.consulta.idConsulta > 0) {
      //MODIFICAR
      //PRACTICA IDEAL
      this.consultaService.modificar(this.consulta).pipe(switchMap(() => {
        return this.consultaService.listar();
      })).subscribe(data => {
        this.consultaService.setConsultaCambio(data);
        this.consultaService.setMensajeCambio('SE MODIFICO');
      });
    } else {
      //REGISTRAR
      this.consultaService.registrar(this.consulta).pipe(switchMap(() => {
        return this.consultaService.listar();
      })).subscribe(data => {
        this.consultaService.setConsultaCambio(data);
        this.consultaService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }


}
