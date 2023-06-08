import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, OnChanges {
    array: any = ['Charlie', 'Dereck', 'Amelie'];
    @Input() dataNumbers: number[] = [];
    @Input() requestedPieChart: boolean = false;
    categories: any = ['Clothes', 'Accessories', 'Jewelry']
    data: any;
    options: any;


    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.requestedPieChart) {
            this.func();
        }
        console.log(changes);
    }

    func() {

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        this.data = {
            labels: this.array,
            datasets: [
                {   
                    data: this.dataNumbers,
                    backgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--blue-400')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500')]
                }
            ]
        };

        this.options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }
}
