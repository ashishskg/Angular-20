import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResults } from './investment-results/investment-results';
import { InvestmentResult } from './investment-result.model';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app-4-investment-calculator';

  resultsData?: InvestmentResult[];
}
