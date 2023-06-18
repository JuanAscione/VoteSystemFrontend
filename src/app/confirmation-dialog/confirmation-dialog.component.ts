import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  styleUrls: ['./confirmation-dialog.component.css'],
  template: `
    <h2 mat-dialog-title class="custom-dialog-title">Confirmación</h2>
    <mat-dialog-content class="custom-dialog-content">
      <p>¿Estás seguro que quieres votar por {{ data.candidateName }}?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end" class="custom-dialog-actions">
      <button mat-button mat-dialog-close color="accent">Cancelar</button>
      <button mat-raised-button class="vote-button" [mat-dialog-close]="true">Votar</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { candidateName: string }
  ) {}
}
