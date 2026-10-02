import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmacao-dialog.html',
  styleUrl: './confirmacao-dialog.css',
})
export class ConfirmacaoDialog {

}
