import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PortfolioOption2Component } from './portfolio-option2/portfolio-option2.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HeroComponent},
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioOption2Component},
  { path: 'faq', component: FaqComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
