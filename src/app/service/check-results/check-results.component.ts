import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Results } from 'src/app/model/results.model';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-check-results',
  templateUrl: './check-results.component.html',
  styleUrls: ['./check-results.component.css']
})
export class CheckResultsComponent implements OnInit {
  Result: Results={
    indexNumber:-1,
    result:''
  };

  constructor(private resultService:ResultsService) { }

  ngOnInit(): void {
  }

  onSubmit(checkResultForm: NgForm) { 
    this.getResults(checkResultForm.value.indexNumber);
  }
  getResults(id: string | null): void {
    this.resultService.get(id)
      .subscribe(
        data => {
          this.Result = data;
        },
        error => {
          console.log(error);
        });
  }
}
