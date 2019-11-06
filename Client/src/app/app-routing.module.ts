import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AgentsComponent } from './agents/agents.component';
import { VillaComponent } from './villa/villa.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { TwobhkComponent } from './twobhk/twobhk.component';
import { ThreebhkComponent } from './threebhk/threebhk.component';
import { FourbhkComponent } from './fourbhk/fourbhk.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path : '' , component:HomeComponent},
{ path : 'about' , component:AboutComponent},
{ path : 'team' , component: AgentsComponent},
{ path : 'contact us' , component: ContactComponent},
{path:'villa' , component: VillaComponent},
{path: 'Forms' , component: FormsComponent},
{path: 'Login' , component: LoginComponent},
{path: 'twobhk' , component:TwobhkComponent},
{path: 'threebhk' , component:ThreebhkComponent},
{path: 'fourbhk' , component:FourbhkComponent},
{path: 'top' , component:TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
