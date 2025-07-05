import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [GlobalLoaderComponent, NavComponent,PageNotFoundComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [GlobalLoaderComponent, NavComponent, PageNotFoundComponent],
})
export class CoreModule {}
