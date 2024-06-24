import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tittle = 'SotaTek Coding Challenge';
}
