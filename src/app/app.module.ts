import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SidebarModule } from 'ng-sidebar';
import { ToastrModule } from 'ngx-toastr' ;
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashboard.guard';
import { InterceptorService } from './loader/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MenuComponent,
    LoginComponent,
    HotelDetailComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'menu', component: MenuComponent, canActivate: [DashboardGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard] },
      { path: 'home', component: HomeComponent, canActivate: [DashboardGuard] },
      { path: 'hotel-detail', component: HotelDetailComponent, canActivate: [DashboardGuard] },
    ]),
    LayoutModule,
    MatListModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
