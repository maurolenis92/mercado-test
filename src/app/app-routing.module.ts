import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}