import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Results } from 'src/app/model/results.model';
import { ResultsService } from 'src/app/services/results.service';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-check-results',
  templateUrl: './check-results.component.html',
  styleUrls: ['./check-results.component.css']
})
export class CheckResultsComponent implements OnInit {
  Result: Results={
    indexNumber:-1,
    result:'',
    fullName:'',
    nameWithInitials:'',
    address:'',
    validTill:new Date((new Date()).getTime() + 24*60*60*1000),
    categoryA:false,
    categoryB:false,
    categoryC:false,
    validTillDateFormat:'',
    categoryList:''
  };

  constructor(private resultService:ResultsService, private router: Router, private scroller: ViewportScroller) { }

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
          this.scroller.scrollToAnchor("resultDiv");
        },
        error => {
          console.log(error);
        });
  }
}
