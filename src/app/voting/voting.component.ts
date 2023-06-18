import { Component } from '@angular/core';
import {VotosService} from "../service/votos.service";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {

  constructor(private votosService: VotosService, private dialog: MatDialog, private snackBar: MatSnackBar){}

  voteCandidate(idCandidate: string, name: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { candidateName: idCandidate }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.votosService.postVote(idCandidate, name).subscribe(
          (res) => {
            this.snackBar.open('¡Tu voto ha sido registrado correctamente!', 'Dismiss', {
              duration: 3000,
            });
            console.log(res);
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
      }
    });
  }

}
