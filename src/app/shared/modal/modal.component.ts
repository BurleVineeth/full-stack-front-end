import { Component, EventEmitter, Output } from '@angular/core';
import { DeskModalAnimation } from '@core/constants';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  imports: [FontAwesomeModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [DeskModalAnimation],
})
export class ModalComponent {
  public isClosing: boolean = false;
  @Output() modalDismiss = new EventEmitter();

  constructor(library: FaIconLibrary) {
    library.addIcons(faClose);
  }

  public backDropDismiss() {
    this.closeModal();
  }

  public closeModal() {
    this.isClosing = true;
  }

  public onAnimationDone() {
    if (this.isClosing) {
      this.dismiss();
    }
  }

  public stopPropagation(event: Event) {
    event.stopPropagation();
  }

  private dismiss() {
    this.modalDismiss.emit();
  }
}
