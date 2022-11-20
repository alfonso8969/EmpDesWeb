import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Empresa } from 'src/app/class/empresa';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.css']
})
export class AddEditCompanyComponent implements OnInit, OnDestroy {

  addCompanyForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addCompanyForm = this.fb.group({
      name: ['', Validators.required],
      sector: ['', Validators.required],
      distrito: ['', Validators.required],
      poligono: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      localidad: [''],
      provincia: [''],
      cod_postal: ['', Validators.required]

    })
  }
  ngOnDestroy(): void {
    document.body.className = ""
  }

  ngOnInit(): void {
    document.body.className = "imnageAddEdit backGroundImage"
  }

  addCompany() {
    let local = this.addCompanyForm.get("localidad")?.value;
    let prov = this.addCompanyForm.get("provincia")?.value;
    const company: Empresa = {
      Id: 0,
      Nombre: this.addCompanyForm.get("name")?.value,
      Sector: this.addCompanyForm.get("sector")?.value,
      Distrito: this.addCompanyForm.get("distrito")?.value,
      Poligono: this.addCompanyForm.get("poligono")?.value,
      Empresa_det_id: Math.floor(Math.random() * (2500 - 1199 + 1) + 1199),
      Habilitada: 1,
      Email: this.addCompanyForm.get("email")?.value,
      Telefono: this.addCompanyForm.get("telefono")?.value,
      Direccion: this.addCompanyForm.get("direccion")?.value,
      Localidad: local == "" ? "Móstoles" : local,
      Provincia: prov == "" ? "Madrid" : prov,
      Cod_postal: this.addCompanyForm.get("cod_postal")?.value

    }
    console.log(company);
  }

}
