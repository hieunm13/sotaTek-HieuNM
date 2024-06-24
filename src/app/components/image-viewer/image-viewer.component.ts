import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { listImageData } from '../../data/imageData';
import { IHitZone } from '../../data/models/hitZone';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent implements OnInit {
  @ViewChild('largeImage', { static: true })
  largeImage!: ElementRef<HTMLImageElement>;
  @ViewChildren('hitZoneElement') hitZoneElements!: QueryList<ElementRef>;

  listImageData = listImageData;
  currentPart: number = 1;
  partWidth?: number;
  imagePath = '../assets/images/';
  currentImage = this.listImageData[0];
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    const image = this.largeImage.nativeElement;

    const containerWidth = image?.parentElement?.clientWidth;
    this.partWidth = containerWidth;
    this.currentPart = 1;
    this.updateImagePosition();
  }

  prev() {
    this.currentPart = Math.max(this.currentPart - 1, 0);
    this.updateImagePosition();
  }

  next() {
    if (this.partWidth) {
      const image = this.largeImage.nativeElement;
      const maxPart = Math.floor(image.width / this.partWidth) - 1;
      this.currentPart = Math.min(this.currentPart + 1, maxPart);
      this.updateImagePosition();
    }
  }

  updateImagePosition() {
    if (this.partWidth) {
      const image = this.largeImage.nativeElement;
      const offset = -this.currentPart * this.partWidth;
      image.style.transform = `translateX(${offset}px)`;
      this.cdr.detectChanges();
      this.setPositionForHitZone();
    }
  }

  setPositionForHitZone() {
    const hitZonesInCurrentPart = this.currentImage.hitZones.filter(
      (item) => item.showPart === this.currentPart
    );
    this.hitZoneElements.forEach((hitZone, index) => {
      const element = hitZone.nativeElement;
      element.style.top = hitZonesInCurrentPart[index].x;
      element.style.right = hitZonesInCurrentPart[index].y;
    });
  }

  changeImage(hitZone: IHitZone) {
    this.currentImage = this.listImageData[hitZone.goto];
    this.currentPart = 1;
    this.updateImagePosition();
    this.cdr.detectChanges();
  }
}
