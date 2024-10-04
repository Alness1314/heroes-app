import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { InternalServerErrorPageComponent } from './pages/internal-server-error-page/internal-server-error-page.component';

@NgModule({
  declarations: [NotFoundPageComponent, InternalServerErrorPageComponent],
  exports: [NotFoundPageComponent, InternalServerErrorPageComponent],
})
export class SharedModule {}
