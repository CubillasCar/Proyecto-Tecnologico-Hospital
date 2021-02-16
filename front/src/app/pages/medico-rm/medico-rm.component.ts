import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from './../../_model/medico';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicoService } from './../../_service/medico.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-medico-rm',
  templateUrl: './medico-rm.component.html',
  styleUrls: ['./medico-rm.component.css']
})
export class MedicoRmComponent implements OnInit {

  displayedColumns = ['idmedico', 'nombres', 'apellidos', 'cmp'];
  dataSource: MatTableDataSource<Medico>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private medicoService: MedicoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.medicoService.getMedicoCambio().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.medicoService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.medicoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(medico: Medico) {
    this.medicoService.eliminar(medico.idMedico).pipe(switchMap(() => {
      return this.medicoService.listar();
    })).subscribe(data => {
      this.medicoService.setMedicoCambio(data);
      this.medicoService.setMensajeCambio('SE ELIMNO');
    });
  }
}
