import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: CalculatorComponent, pathMatch:'full'},
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class AppRoutingModule{

}
