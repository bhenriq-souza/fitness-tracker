import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { AUTHENTICATION_ROUTING } from '../_routing/authentication.routing';

@NgModule({
  imports: [RouterModule.forChild(AUTHENTICATION_ROUTING)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }