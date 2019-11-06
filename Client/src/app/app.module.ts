import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { AgentsComponent } from './agents/agents.component';
import { VillaComponent } from './villa/villa.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TopComponent } from './top/top.component';
import { TwobhkComponent } from './twobhk/twobhk.component';
import { ThreebhkComponent } from './threebhk/threebhk.component';
import { FourbhkComponent } from './fourbhk/fourbhk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    CategoriesComponent,
    ContactComponent,
    AgentsComponent,
    VillaComponent,
    FormsComponent,
    LoginComponent,
    TopComponent,
    TwobhkComponent,
    ThreebhkComponent,
    FourbhkComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
