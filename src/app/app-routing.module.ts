import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './components/wordreverser/wordreverser.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './components/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './components/multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './components/usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './components/interestcalculator/interestcalculator.component';
import { CompoundinterestcalculatorComponent } from './components/compoundinterestcalculator/compoundinterestcalculator.component';
import { FibonaccigeneratorComponent } from './components/fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './components/oddsumcalculator/oddsumcalculator.component';
import { CurrencyformatterComponent } from './components/currencyformatter/currencyformatter.component';
import { RandomquotedisplayComponent } from './components/randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './components/uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './components/divisiblechecker/divisiblechecker.component';
import { AlertComponent } from './components/alert/alert.component';
import { PersonalListComponent } from './components/personal-list/personal-list.component';

const routes: Routes = [
  { path: 'display-hello-world', component: DisplayhelloworldComponent },
    { path: 'show-hello-button', component: ShowhellobuttonComponent },
    { path: 'display-name', component: DisplaynameComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'simple-form', component: SimpleformComponent },
    { path: 'user-age', component: UserageComponent },
    { path: 'user-greeting', component: UsergreetingComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'text-length', component: TextlengthComponent },
    { path: 'currency-converter', component: CurrencyconverterComponent },
    { path: 'even-odd-checker', component: EvenoddcheckerComponent },
    { path: 'word-reverser', component: WordreverserComponent },
    { path: 'show-date', component: ShowdateComponent },
    { path: 'show-username', component: ShowusernameComponent },
    { path: 'multiplication-table', component: MultiplicationtableComponent },
    { path: 'simple-login', component: SimpleloginComponent },
    { path: 'fahrenheit-to-celsius', component: FahrenheittocelsiusComponent },
    { path: 'bookmark-list', component: BookmarklistComponent },
    { path: 'character-counter', component: CharactercounterComponent },
    { path: 'palindrome-checker', component: PalindromecheckerComponent },
    { path: 'temperature-converter', component: TemperatureconverterComponent },
    { path: 'shopping-list', component: ShoppinglistComponent },
    { path: 'factorial-calculator', component: FactorialcalculatorComponent },
    { path: 'todo-manager', component: TodomanagerComponent },
    { path: 'guess-number-game', component: GuessnumbergameComponent },
    { path: 'word-counter', component: WordcounterComponent },
    { path: 'random-number-generator', component: RandomnumbergeneratorComponent },
    { path: 'multiplication-checker', component: MultiplicationcheckerComponent },
    { path: 'uppercase-converter', component: UppercaseconverterComponent },
    { path: 'word-shuffler', component: WordshufflerComponent },
    { path: 'bmi-solver', component: BmisolverComponent },
    { path: 'username-validator', component: UsernamevalidatorComponent },
    { path: 'interest-calculator', component: InterestcalculatorComponent },
    { path: 'compound-interest-calculator', component: CompoundinterestcalculatorComponent },
    { path: 'fibonacci-generator', component: FibonaccigeneratorComponent },
    { path: 'odd-sum-calculator', component: OddsumcalculatorComponent },
    { path: 'currency-formatter', component: CurrencyformatterComponent },
    { path: 'random-quote-display', component: RandomquotedisplayComponent },
    { path: 'uppercase-greeting', component: UppercasegreetingComponent },
    { path: 'divisible-checker', component: DivisiblecheckerComponent },
    { path: 'alert', component: AlertComponent },
    { path: 'personal-list', component: PersonalListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
