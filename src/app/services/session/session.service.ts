import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  private _idDataBase: number;
  private _monthSelected: string;

  public set idDataBase(id: number) {
    this._idDataBase = id;
  }

  public get idDataBase(): number {
    return this._idDataBase;
  }
  

  public set monthSelected(month: string) {
    this._monthSelected = month;
  }

  public get monthSelected(): string {
    return this._monthSelected;
  }

}
