import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { HOME_ROUTING } from '../_routing/home.routing';

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTING)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }