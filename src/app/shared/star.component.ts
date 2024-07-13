import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { IStar } from "./star";

const colorDefault = '#000000';
const colorHighlighted = '#337AB7';

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating = 0;
    cropWidth = 75;
    cropWidthComputed = 75;
    stars: IStar[] = [
        { index: 1, color: colorDefault },
        { index: 2, color: colorDefault },
        { index: 3, color: colorDefault },
        { index: 4, color: colorDefault },
        { index: 5, color: colorDefault }
    ];
    @Output() starClicked = new EventEmitter<IStar>();

    onMouseEnterArea() {
        this.cropWidth = 75;
        throw new Error('Method not implemented.');
    }

    onMouseLeaveArea() {
        this.cropWidth = this.cropWidthComputed;
    }

    onClickStar(star: IStar): void {
        this.starClicked.emit(star);
    }

    onMouseEnterStar(star: IStar): void {
        this.cropWidth = 75;
        for (let i = 0; i < star.index; i++) {
            this.stars[i].color = colorHighlighted;
        }
    }

    onMouseLeaveStar(star: IStar): void {
        this.cropWidth = this.cropWidthComputed;
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].color = colorDefault;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`In ngOnChanges: ${changes}`);
        this.cropWidthComputed = this.rating * 75 / 5;
        this.cropWidth = this.cropWidthComputed;
    }
}
