import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { OffresService } from '../Services/offres.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Offre } from '../Services/offre_model';
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
offreeForm: FormGroup;
idU:string;
  constructor(
    private fb: FormBuilder, 
    private offresService: OffresService, 
    private router: Router) {}

  ngOnInit() {
    this.initForm();
    this.idU = firebase.auth().currentUser.uid;
  }
  initForm() {
    this.offreeForm = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      profil: ['', Validators.required],
      salaire: ['', Validators.required],
      contrat: ['',Validators.required],
      description: ['',Validators.required]
    });
  }
  onSaveOffre() {
    const nom = this.offreeForm.get('nom').value;
    // const creatorID = firebase.auth().currentUser.uid;
    const profil = this.offreeForm.get('profil').value;
    const salaire = this.offreeForm.get('salaire').value;
    const contrat = this.offreeForm.get('contrat').value;
    const description = this.offreeForm.get('description').value;
    const newOffre = new Offre(this.idU , nom , profil, salaire, contrat, description);
    this.offresService.createNewOffre(newOffre);
    this.router.navigate(['/offres']);
  }
}
