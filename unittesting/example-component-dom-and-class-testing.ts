import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesPage } from './routes.page';
import { Ride } from './ride';

// Group of tests
describe('RoutesPage', () => {
  let component: RoutesPage;
  let fixture: ComponentFixture<RoutesPage>;
  let rides = [];
  let firstdate;
  let seconddate; 
  let app; 
  let dom; 

  // setup method -> run for every IT
  beforeEach(async(() => {

    // configure the test wrapper arround the component
    TestBed.configureTestingModule({
      declarations: [ RoutesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    // create an test component
    fixture = TestBed.createComponent(RoutesPage);

    // normal instance
    component = fixture.componentInstance;

    // test instance app
    app = fixture.debugElement.componentInstance;

    // get the HTML native DOM element
    dom = fixture.debugElement.nativeElement;

    // add mock data with two seperate dates
    rides = [];
    firstdate = new Date(2019,9,1,10,1);
    seconddate = new Date(2019,9,2,11,1);
    rides.push(new Ride(firstdate, firstdate), new Ride(seconddate, seconddate));
    app.rides = rides;
    
    // tell the fixture that an change is made -> this can be controlled
    fixture.detectChanges();
  }));

  // 1. COMPONENT CLASS TEST
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    expect(app.title).toEqual('Mijn ritten');
  }); 

  // 2. COMPONENT DOM TESTING
  it("should show the right amount of rides", () => {
    expect(dom.querySelectorAll('.ride-route').length).toEqual(2);
  });

  it("should show the dates in the right format", () => {
    expect(dom.querySelectorAll('.dateformat')[0].innerText).toEqual('01-10-2019');
  });

  it("should show the start and endtime", () => {
    let html_rides = dom.querySelectorAll('.ride');
    let first = html_rides[0].querySelectorAll('.time');
    expect(first[0].innerText).toEqual('10:01');
    expect(first[1].innerText).toEqual('10:01');
    let second = html_rides[1].querySelectorAll('.time');
    expect(second[0].innerText).toEqual('11:01');
    expect(second[1].innerText).toEqual('11:01');
  });

});
