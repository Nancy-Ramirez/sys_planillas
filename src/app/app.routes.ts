import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionEmpleadosComponent } from './Gestiones/Empleados/gestion-empleados.component';
import { OrganizacionComponent } from './Gestiones/Organizacion/organizacion.component';
import { LoginComponent } from './Components/login/login.component';
import { CargoComponent } from './Catalogos/Cargo/cargo.component';
import { DepartamentoComponent } from './Catalogos/Departamento/departamento.component';
import { DetalleDescuentoComponent } from './Catalogos/DetalleDescuento/detalle-descuento.component';
import { EstadoCivilComponent } from './Catalogos/EstadoCivil/estado-civil.component';
import { MunicipioComponent } from './Catalogos/Municipio/municipio.component';
import { PaisComponent } from './Catalogos/Pais/pais.component';
import { ProfesionComponent } from './Catalogos/Profesion/profesion.component';
import { TipoDescuentoComponent } from './Catalogos/TipoDescuento/tipo-descuento.component';
import { TipoDocumentoComponent } from './Catalogos/TipoDocumento/tipo-documento.component';
import { DetalleEmpleadoComponent } from './Gestiones/Empleados/DetalleEmpleado/detalle-empleado.component';
import { PlanillaComponent } from './Gestiones/Planilla/planilla.component';
import { PresupuestoComponent } from './Gestiones/Presupuesto/presupuesto.component';
import { UnidadOrganizativaComponent } from './Gestiones/UnidadOrganizativa/unidad-organizativa.component';
import { UsuarioComponent } from './Gestiones/Usuario/usuario.component';

export const routes: Routes = [
    { path: '', component: GestionEmpleadosComponent},
    { path: 'organizacion', component: OrganizacionComponent},
    { path: 'login', component: LoginComponent},

    /*Componentes*/
    { path: 'cargo', component: CargoComponent},
    { path: 'departamento', component: DepartamentoComponent},
    { path: 'detalle-descuento', component: DetalleDescuentoComponent},
    { path: 'estado-civil', component: EstadoCivilComponent},
    { path: 'municipio', component: MunicipioComponent},
    { path: 'pais', component: PaisComponent},
    { path: 'profesion', component: ProfesionComponent},
    { path: 'tipo-descuento', component: TipoDescuentoComponent},
    { path: 'tipo-documento', component: TipoDocumentoComponent},

    /*Gestiones*/
    { path: 'detalle-empleado', component: DetalleEmpleadoComponent},
    { path: 'organizacion', component: OrganizacionComponent},
    { path: 'planilla', component: PlanillaComponent},
    { path: 'presupuesto', component: PresupuestoComponent},
    { path: 'unidad-organizativa', component: UnidadOrganizativaComponent},
    { path: 'usuario', component: UsuarioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}