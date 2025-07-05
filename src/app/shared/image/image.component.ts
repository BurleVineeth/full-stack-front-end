import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  public alt = input.required<string>();
  public fill = input<boolean>(false);
  public height = input.required<number>();
  public priority = input<boolean>(false);
  public sizes = input.required<string>();
  public src = input.required<string>();
  public width = input.required<number>();

  public isImageLoading = true;

  public onImageLoad() {
    this.isImageLoading = false;
  }
}
