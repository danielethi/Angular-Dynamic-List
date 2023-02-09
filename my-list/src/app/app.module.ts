import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListTreeComponent } from './list-tree/list-tree.component';
import { TreeParentComponent } from './tree-parent/tree-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTreeComponent,
    TreeParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
