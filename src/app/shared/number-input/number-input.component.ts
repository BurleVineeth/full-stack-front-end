import { Component, inject, input, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '@core/services/shared.service';
import { FormatKeyPipe } from '@core/pipes/format-key.pipe';

@Component({
  selector: 'app-number-input',
  imports: [ReactiveFormsModule, FormatKeyPipe],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent {
  public id = input.required<string>();
  @Input({ required: true }) control!: FormControl;

  private readonly sharedSvc = inject(SharedService);

  public getErrorMessage(): string {
    return this.sharedSvc.getErrorMessage(this.control, this.id());
  }
}
