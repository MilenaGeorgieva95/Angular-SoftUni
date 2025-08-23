import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-sync-simulation',
  templateUrl: './redux-sync-simulation.component.html',
  styleUrls: ['./redux-sync-simulation.component.css'],
})
export class ReduxSyncSimulationComponent implements OnInit {
  ngOnInit(): void {
    this.domoFn();
  }

  domoFn(): void {
    // Redux => Pattern
    //  - State => Single source of truth
    //  - Actions => Modifies State
    // How do we change the state:
    //  - we never touch the state directly!
    //  - we dispatch an Action

    //Reducer => captures all dispatched actions and does something for each action
    const reducer1 = (acc: number, curr: number) => acc + curr;
    //[eventsCollection].reduce(
    // (takenState, newState) => {switch(action) => complete action}, initialState)

    const result1 = [10, 20, 30].reduce(reducer1, 0);
    // console.log({ result1 });

    //Complex example:

    interface AppState {
      msg: string;
      person: Object;
      isAuth: boolean;
    }
    //Default state
    const initialState: AppState = {
      msg: '',
      person: {},
      isAuth: false,
    };

    //ACTIONS
    const EVENT_1 = 'EVENT1'
    const EVENT_2 = 'EVENT2'
    const EVENT_3 = 'EVENT3'

    //Reducer
    const reducer = (state: AppState, action: any)=>{
            switch (action.type) {
              case EVENT_1: return {...state, msg: action.value};  
              case EVENT_2: return {...state, person: action.value}; 
              case EVENT_3: return {...state, isAuth: action.value}; 
              default: return state; 
            }
    }

    //Events collection => for dispatching with value
    const eventCollection = [
      {type: EVENT_1, value: 'Initial Message!'},
      {type: EVENT_2, value: {name: 'Peter', age: 21, gender: 'M'}},
      {type: EVENT_3, value: true},
    ]


    const result = eventCollection.reduce(reducer, initialState);
    // console.log({result});

    //NgRx is similar to Redux but uses observables
    //Enforces uni-directional data flow
    //Simple flat objects
    
  }
}
