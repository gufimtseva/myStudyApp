import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-housing-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './housing-list.component.html',
  styleUrl: './housing-list.component.css'
})
export class HousingListComponent implements OnInit {
  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    //console.log('searchHousingLocations:', searchText);

    const FilterByCity = (location: HousingLocation) => 
      location
      .city
      .toLowerCase()
      .includes(searchText.toLowerCase())
    //const result = filter({city: 'abc'} as HousingLocation);
    this.results = this.locationList.filter(FilterByCity);
  }

  //sends data from parent to child
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  //sends an event with data from the child to their parent component
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this)
  }
}
