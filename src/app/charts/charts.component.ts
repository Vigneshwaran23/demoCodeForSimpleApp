import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../app.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  incomeData: any = {};

  constructor(private financialService: FinancialDataService) {}

  ngOnInit(): void {
    // Fetch income statement
    this.financialService.getIncomeStatement().subscribe((data) => {
      // Assuming data.annualReports contains the relevant income statement data
      this.incomeData = data.annualReports;
    });
  }
}
