import { ConsultaService } from './../../_service/consulta.service';
import { Consulta } from './../../_model/consulta';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { ConsultaMDialogoComponent } from './consulta-m-dialogo/consulta-m-dialogo.component';

@Component({
  selector: 'app-consulta-m',
  templateUrl: './consulta-m.component.html',
  styleUrls: ['./consulta-m.component.css']
})
export class ConsultaMComponent implements OnInit {

  displayedColumns = ['idconsulta', 'paciente', 'medico', 'especialidad', 'consultorio' , 'acciones'];
  dataSource: MatTableDataSource<Consulta>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private consultaService: ConsultaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.consultaService.getConsultaCambio().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.consultaService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.consultaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(consulta: Consulta) {
    this.consultaService.eliminar(consulta.idConsulta).pipe(switchMap(() => {
      return this.consultaService.listar();
    })).subscribe(data => {
      this.consultaService.setConsultaCambio(data);
      this.consultaService.setMensajeCambio('SE ELIMNO');
    });
  }

  abrirDialogo(consulta?: Consulta) {
    let con = consulta != null ? consulta : new Consulta();
    this.dialog.open(ConsultaMDialogoComponent, {
      width: '250px',
      data: con
    })
  }

}
