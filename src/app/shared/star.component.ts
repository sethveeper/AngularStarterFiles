import { Component } from '@angular/core';
import { start } from 'repl';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    rating: number = 4;
    starWidth: number;
}