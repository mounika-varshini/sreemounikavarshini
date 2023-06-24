import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { DownloadFileService } from './download-file.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ContactsComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    }),
  ],
  exports: [
    MatIconModule
  ],
  providers: [DownloadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
