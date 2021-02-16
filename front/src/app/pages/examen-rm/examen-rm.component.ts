import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';
import { ExamenService } from './../../_service/examen.service';
import { Examen } from './../../_model/examen';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-examen-rm',
  templateUrl: './examen-rm.component.html',
  styleUrls: ['./examen-rm.component.css']
})
export class ExamenRmComponent implements OnInit {

  displayedColumns = ['id', 'nombre', 'descripcion'];
  dataSource: MatTableDataSource<Examen>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private examenService: ExamenService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.examenService.getExamenCambio().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.examenService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'Aviso', {
        duration: 2000,
      });
    });

    this.examenService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(examen: Examen) {
    this.examenService.eliminar(examen.idExamen).pipe(switchMap(() => {
      return this.examenService.listar();
    })).subscribe(data => {
      this.examenService.setExamenCambio(data);
      this.examenService.setMensajeCambio('Se eliminó');
    });

  }

}
